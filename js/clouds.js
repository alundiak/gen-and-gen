// https://www.jasondavies.com/wordcloud/

//
// ES6 doesn't load this:
// Failed to load module script: The server responded with a non-JavaScript MIME type of "application/json".
// Strict MIME type checking is enforced for module scripts per HTML spec.
//
// import {surnamesData} from '/data/surnames.json'
// import {locationsData} from '/data/locations.json'

// import {surnamesData_EN, surnamesData_UA} from '/js/surnames.js'
// import {locationsData_EN, locationsData_UA} from '/js/locations.js'

// https://stackoverflow.com/questions/52450957/d3-scale-category20-gives-uncaught-typeerror-cannot-read-property-category20?noredirect=1&lq=1
var fill = d3.scale.category20(); // old code
// var fill = d3.schemeCategory10; // new code for D3 v4-based code
// var fill = d3.schemeCategory20; // new code for D3 v4-based code
// var fill = d3.schemeCategory20c; // new code for D3 v4-based code

// var fill = d3.schemeAccent; // from d3-scale-chromatic
// var fill = d3.scaleOrdinal(d3.schemeCategory20) // bad
// console.log(fill);

// console.log("My Surnames Length: "+surnamesData.length);
// console.log("My Locations Length: "+locationsData.length);

var sizeIndex = 20; //50
var rotateIndex = 0; //90
var cloudDensitySize = [400, 400]; //[300, 300]

d3.layout.cloud().size(cloudDensitySize)
  .words(surnamesData_EN.map(function (d) {
    return { text: d, size: 10 + Math.random() * sizeIndex };
  }))
  .rotate(function () { return ~~(Math.random() * 2) * rotateIndex; })
  .font("Impact")
  .fontSize(function (d) { return d.size; })
  .on("end", draw)
  .start();


d3.layout.cloud().size(cloudDensitySize)
  .words(surnamesData_UA.map(function (d) {
    return { text: d, size: 10 + Math.random() * sizeIndex };
  }))
  .rotate(function () { return ~~(Math.random() * 2) * rotateIndex; })
  .font("Impact")
  .fontSize(function (d) { return d.size; })
  .on("end", draw)
  .start();


d3.layout.cloud().size(cloudDensitySize)
  .words(locationsData_EN.map(function (d) {
    return { text: d, size: 10 + Math.random() * sizeIndex };
  }))
  .rotate(function () { return ~~(Math.random() * 2) * rotateIndex; })
  .font("Impact")
  .fontSize(function (d) { return d.size; })
  .on("end", draw)
  .start();

d3.layout.cloud().size(cloudDensitySize)
  .words(locationsData_UA.map(function (d) {
    return { text: d, size: 10 + Math.random() * sizeIndex };
  }))
  .rotate(function () { return ~~(Math.random() * 2) * rotateIndex; })
  .font("Impact")
  .fontSize(function (d) { return d.size; })
  .on("end", draw)
  .start();

function draw(words) {

  // console.log("Selected words to draw. Length: " + words.length);

  d3.select(".surnames_cloud").append("div").attr('class', 'svg-container').append("svg")
    // d3.select("body").append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(200,200)")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function (d) { return d.size + "px"; })
    .style("font-family", "Impact")
    .style("fill", function (d, i) { return fill[i]; })
    .attr("text-anchor", "middle")
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function (d) { return d.text; });
}

