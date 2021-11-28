// Example of Zoomed Sunburst based on D3@6
// https://observablehq.com/@d3/zoomable-sunburst

const width = 532;
const radius = width / 16;

function partition(innerData) {
  const innerRoot = d3.hierarchy(innerData);

  // const sumEd = innerRoot.sum(d => d.value); // based on flare...json standard structure
  const sumEd = innerRoot.sum(d => d.size); // based on sunburst-2.json
  // const sortEd = sumEd.sort((a, b) => b.value - a.value);
  // const sortEd = sumEd.sort((a, b) => b.size - a.size);

  return d3.partition()
    .size([2 * Math.PI, innerRoot.height + 1])
    (innerRoot);
}

const arc = d3.arc()
  .startAngle(d => d.x0)
  .endAngle(d => d.x1)
  .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
  .padRadius(radius * 1.5)
  .innerRadius(d => d.y0 * radius)
  .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1));

function arcVisible(d) {
  return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
}

function labelVisible(d) {
  return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
}

function labelTransform(d) {
  const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
  const y = (d.y0 + d.y1) / 2 * radius;
  return `rotate(${x - 90}) translate(${y}, 0) rotate(${x < 180 ? 0 : 180})`;
}

(async function () {
  // const data = await fetch('data/flare-2_for_d3@6.json').then(response => response.json());
  const data = await fetch('data/sunburst-2.json').then(response => response.json());

  const root = partition(data);

  // can be refactored and extracted as independent function
  // const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1)); // for sunburst-2.json (then it properly uses below code...)

  root.each(d => d.current = d); // strange

  const svg = d3.select(".surnames_sunburst").append("svg")
    .attr("viewBox", [0, 0, width, width])
    .style("font", "10px sans-serif");

  const gElement = svg.append("g")
    .attr("transform", `translate(${width / 2},${width / 2})`);

  const path = gElement.append("g")
    .selectAll("path")
    .data(root.descendants().slice(1))
    .join("path")
    .attr("fill", d => {
      // while (d.depth > 1) d = d.parent; // causes 50% render
      // return color(d.data.name); // for flare-2_for_d3@6.json
      // return color(d.data.colorValue); // colorValue in sunburst-2.json => then 2 colors
      // return color(undefined) // then gradation of color
      return d.data.colorValue; // colorValue in sunburst-2.json => then 2 colors
    })
    // .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0) // depends of how many circles rendered. IMPORTANT
    .attr("d", d => arc(d.current));

  path
    .filter(d => d.children)
    .style("cursor", "pointer")
    .on("click", clicked)
    .append("title")
    .text(d => {
      return `${d.data?.year} - ${d.data?.firstName} ${d.data?.name}`; // for sunburst-2.json
    });

  const label = gElement.append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
    .selectAll("text")
    .data(root.descendants().slice(1))
    .join("text")
    .attr("dy", "0.35em")
    .attr("fill-opacity", d => +labelVisible(d.current)) // if line commented, it shows data.name for all sectors
    .attr("transform", d => labelTransform(d.current))
    .text(d => d.data.name)
    .attr('font-size', '6px')
    .attr('fill', '#fff');

  const parent = gElement.append("circle")
    .datum(root)
    .attr("r", radius)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("click", clicked);

  function clicked(event, p) {
    parent.datum(p.parent || root);

    root.each(d => d.target = {
      x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
      x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
      y0: Math.max(0, d.y0 - p.depth),
      y1: Math.max(0, d.y1 - p.depth)
    });

    const elementTransition = gElement.transition().duration(750);

    // Transition the data on all arcs, even the ones that aren’t visible,
    // so that if this transition is interrupted, entering arcs will start
    // the next transition from the desired position.
    path
      .transition(elementTransition)
      .tween("data", d => {
        const interpolated = d3.interpolate(d.current, d.target);
        return tParam => d.current = interpolated(tParam);
      })
      .filter(function (d) {
        return +this.getAttribute("fill-opacity") || arcVisible(d.target);
      })
      .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
      .attrTween("d", d => () => arc(d.current));

    label
      .filter(function (d) {
        return +this.getAttribute("fill-opacity") || labelVisible(d.target);
      })
      .transition(elementTransition)
      .attr("fill-opacity", d => +labelVisible(d.target))
      .attrTween("transform", d => () => labelTransform(d.current));
  }

  // d3.select(".surnames_sunburst").append(svg); // doesn't work
  // d3.select(".surnames_sunburst").append(svg.node()); // doesn't work

})();

