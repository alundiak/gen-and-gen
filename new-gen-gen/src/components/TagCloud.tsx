import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

interface TagCloudProps {
  nicknames: { name: string; count: number }[];
}

const TagCloud: React.FC<TagCloudProps> = ({ nicknames }) => {
  const cloudRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!cloudRef.current) return;

    // Set dimensions for the cloud
    const width = 500;
    const height = 500;

    // Create the SVG canvas
    const svg = d3
      .select(cloudRef.current)
      .attr("width", width)
      .attr("height", height);

    // Scale font size based on counts
    const fontSizeScale = d3
      .scaleLinear()
      .domain([d3.min(nicknames, (d) => d.count) || 1, d3.max(nicknames, (d) => d.count) || 100])
      .range([10, 50]); // Font sizes between 10px and 50px

    // Create the D3-cloud layout
    const layout = cloud()
      .size([width, height])
      .words(
        nicknames.map((d) => ({
          text: d.name,
          size: fontSizeScale(d.count),
        }))
      )
      .padding(5)
      .rotate(0) // No rotation for horizontal alignment
      .fontSize((d) => d.size) // Set font size
      .on("end", draw); // Call the draw function when layout finishes

    layout.start();

    function draw(words: any[]) {
      // Remove old groups to prevent duplicates
      svg.selectAll("g").remove();

      // Append new words in cloud form, but with horizontal randomization
      svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d: any) => `${d.size}px`)
        .style("fill", () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
        .attr("text-anchor", "middle")
        .attr("x", (d: any) => d.x) // Use the calculated x position from the cloud layout
        .attr("y", (d: any) => d.y) // Use the calculated y position (still random)
        .text((d: any) => d.text);
    }
  }, [nicknames]);

  return <svg ref={cloudRef}></svg>;
};

export default TagCloud;
