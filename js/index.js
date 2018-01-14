// https://www.jasondavies.com/wordcloud/

//
// ES6 doesn't load this:
// Failed to load module script: The server responded with a non-JavaScript MIME type of "application/json". 
// Strict MIME type checking is enforced for module scripts per HTML spec.
// 
// import {surnamesData} from '/data/surnames.json'
// import {locationsData} from '/data/locations.json'

import {surnamesData_EN, surnamesData_UA} from '/js/surnames.js'
import {locationsData} from '/js/locations.js'

// var fill = d3.scale.category20(); // old code
var fill = d3.schemeCategory20; // new code

// console.log("My Surnames Length: "+surnamesData.length);
// console.log("My Locations Length: "+locationsData.length);

var sizeIndex = 20; //50
var rotateIndex = 0; //90
var cloudDensitySize = [400, 400]; //[300, 300]

d3.layout.cloud().size(cloudDensitySize)
    .words(surnamesData_EN.map(function(d) {
      return {text: d, size: 10 + Math.random() * sizeIndex};
    }))
    .rotate(function() { return ~~(Math.random() * 2) * rotateIndex; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();


d3.layout.cloud().size(cloudDensitySize)
    .words(surnamesData_UA.map(function(d) {
      return {text: d, size: 10 + Math.random() * sizeIndex};
    }))
    .rotate(function() { return ~~(Math.random() * 2) * rotateIndex; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();


d3.layout.cloud().size(cloudDensitySize)
    .words(locationsData.map(function(d) {
      return {text: d, size: 10 + Math.random() * sizeIndex};
    }))
    .rotate(function() { return ~~(Math.random() * 2) * rotateIndex; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();


function draw(words) {

  console.log("Selected words to draw. Length: "+words.length);

  d3.select("body").append("svg")
      .attr("width", 400)
      .attr("height", 500)
    .append("g")
      .attr("transform", "translate(200,200)")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill[i]; })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

