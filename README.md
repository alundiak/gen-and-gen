# gen-&-gen #
Genealogy and Genetics related projects sandbox

## Tech Stack
Based on D3.JS try to implement tree visualization

## 1: [Surnames and Locations Clouds](https://alundiak.github.io/gen-and-gen/clouds)

TODO: Migrate to D3 v4-5-6-7 
- https://github.com/d3/d3/blob/main/CHANGES.md#changes-in-d3-40
- https://github.com/d3/d3-scale-chromatic#categorical
- https://stackoverflow.com/questions/66714093/javascript-and-d3-error-cannot-read-property-cloud-of-undefined
- https://stackoverflow.com/questions/44379393/how-can-i-specify-the-d3-v4-micro-library-on-cdn

- D3@6 based
  - https://observablehq.com/@d3/zoomable-sunburst
  - https://observablehq.com/@d3/zoomable-circle-packing
  - https://observablehq.com/collection/@d3/d3-chord

- [D3.Cloud](https://github.com/jasondavies/d3-cloud)
- Maybe [D3.Cloud v4](https://www.npmjs.com/package/d3-v4-cloud)
- [D3.Scale](https://github.com/d3/d3-scale)
- Maybe React tag-cloud - https://madox2.github.io/react-tagcloud/

## 2: [Surnames Sunburst chart](https://alundiak.github.io/gen-and-gen/sunburst)
- https://bl.ocks.org/mbostock/4063423 - Sunburst Partition
- https://bl.ocks.org/kerryrodden/7090426 - Sequences sunburst
- https://www.jasondavies.com/coffee-wheel/ - Coffee Wheel
  - alternative https://github.com/amaunz/d3/blob/master/coffee-wheel/coffee-wheel.html - also D3@3 based
  - alternative https://www.anychart.com/products/anychart/gallery/Sunburst_Charts/Coffee_Flavour_Wheel.php - based on AnyChart.
- https://bl.ocks.org/mbostock/4348373 - Zoomable Sunburst
- http://charts.animateddata.co.uk/tennis/matchTree.html - maybe rework sunburst with this "Circular match tree"
- NEW: https://observablehq.com/@dmadisetti/perseverance-parachute

Alternative
- https://github.com/magicsunday/webtrees-fan-chart basted on PHP-built [webtrees](https://www.webtrees.net/index.php/en/).
- https://awesomeopensource.com/project/magicsunday/webtrees-fan-chart?categoryPage=7


## 3: My Matches Chart - TODO
- Example can be Cluster info from MyHeritage (CVS format)
- https://csaladenes.com/2015/06/21/a-visual-exploratory-of-refugee-flows-over-the-world-using-dynamic-chord-diagrams/

## 4: Lundiaks GenTree  (maybe just male to show yDNA chain)
- Maybe parser of GEDCOM
- http://bl.ocks.org/mbostock/4339083 - Collapsible Tree
- http://bl.ocks.org/d3noob/8329447 - tree diagram
- http://charts.animateddata.co.uk/datavistree/ - Dataviz diagram
- https://thepowerrank.com/ncaa-tournament-predictions/ - another tree example

## 5: Vulgo names
- Surnames table based on patronymic / male name - matrix
- Surnames table based on matronymic / female name - matrix
- Vulgo names based on my genealogy research
- Maybe dedicated repo.

## 6: MyHeritage "Family Tree Builder" Activity
- Get date/time information from `GEDCOM` file, parse with nodeJS/JS and visualize as time graph. Example in Tumblr Activity section/page.


**Other Resources**:
- https://github.com/d3/d3/wiki/Gallery
- http://techslides.com/over-1000-d3-js-examples-and-demos
- http://coodict.github.io/javascript-in-one-pic/
- http://jsfiddle.net/adiioo7/rutpj/light/
- https://www.jasondavies.com/wordcloud
- https://www.npmjs.com/package/d3.layout.cloud
