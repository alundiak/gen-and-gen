// https://bl.ocks.org/mbostock/4063423 - Sunburst Partition
// https://bl.ocks.org/kerryrodden/7090426 - Sequences sunburst
// https://www.jasondavies.com/coffee-wheel/ - Coffee Wheel

// https://bl.ocks.org/mbostock/4348373 - Zoomable Sunburst

var width = 960,
    height = 700,
    radius = (Math.min(width, height) / 2) - 10;

var formatNumber = d3.format(",d");

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

var y = d3.scale.sqrt()
    .range([0, radius]);

var color = d3.scale.category20c();

var partition = d3.layout.partition()
    .value(function (d) {
        return d.size;
    });

var arc = d3.svg.arc()
    .startAngle(function (d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    })
    .endAngle(function (d) {
        return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    })
    .innerRadius(function (d) {
        return Math.max(0, y(d.y));
    })
    .outerRadius(function (d) {
        return Math.max(0, y(d.y + d.dy));
    });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

var rangeValue = d3.scale.linear().range([0, 2 * Math.PI]);

function t(n, e) {
    return n === e ? !0 : n.children ? n.children.some(function (n) {
        return t(n, e)
    }) : !1
}

function n(t) {
    if (t.children) {
        var e = t.children.map(n),
            r = d3.hsl(e[0]),
            a = d3.hsl(e[1]);
        return d3.hsl((r.h + a.h) / 2, 1.2 * r.s, r.l / 1.2)
    }
    return t.colour || "#fff"
}

function e(t) {
    var n = r(t),
        e = d3.interpolate(rangeValue.domain(), [t.x, t.x + t.dx]),
        a = d3.interpolate(u.domain(), [t.y, n]),
        i = d3.interpolate(u.range(), [t.y ? 20 : 0, o]);
    return function (t) {
        return function (n) {
            return d.domain(e(n)), u.domain(a(n)).range(i(n)), x(t)
        }
    }
}

function a(t) {
    return .299 * t.r + .587 * t.g + .114 * t.b
}

d3.json("./data/sunburst.json", function (error, root) {
    if (error) throw error;

    var pathEl = svg.selectAll("path")
        .data(partition.nodes(root))
        .enter().append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color((d.children ? d : d.parent).name);
        });
    // .on("click", click)

    var txt = pathEl.append("text").style("fill-opacity", 1).style("fill", function (t) {
        return a(d3.rgb(n(t))) < 125 ? "#eee" : "#000"
    }).attr("text-anchor", function (t) {
        return ddd(t.x + t.dx / 2) > Math.PI ? "end" : "start"
    }).attr("dy", ".2em").attr("transform", function (t) {
        var n = (t.name || "").split(" ").length > 1,
            e = 180 * ddd(t.x + t.dx / 2) / Math.PI - 90,
            r = e + (n ? -.5 : 0);
        return "rotate(" + r + ")translate(" + (u(t.y) + c) + ")rotate(" + (e > 90 ? -180 : 0) + ")"
    })

    txt.on("click", click);

    txt.append("tspan").attr("x", 0).text(function (d) {
        return d.name.split(" ")[0] || "tbd0"
    });

    txt.append("tspan").attr("x", 0).attr("dy", "1em").text(function (d) {
        return d.name.split(" ")[1] || "tb1"
    });

    // .append("title")
    // .text(function(d) {
    //     return d.name + "\n" + formatNumber(d.value);
    // });
});

function click(d) {
    svg.transition()
        .duration(750)
        .tween("scale", function () {
            var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
                yd = d3.interpolate(y.domain(), [d.y, 1]),
                yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
            return function (t) {
                x.domain(xd(t));
                y.domain(yd(t)).range(yr(t));
            };
        })
        .selectAll("path")
        .attrTween("d", function (d) {
            return function () {
                return arc(d);
            };
        });
}

d3.select(self.frameElement).style("height", height + "px");
