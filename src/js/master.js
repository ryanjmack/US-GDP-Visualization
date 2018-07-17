/*
  File that utilizes D3.js to visualize some data
*/

import { dataset } from './data.js';

const yAxisPadding = 50;     // we want extra padding for the axes
const xAxisPadding = 50;
const nonAxisPadding = 10;  // but we don't want to waste space on sides with no axes
const height = 400;
const width = 800;

// create the svg element
const svg = d3.select('main')
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .attr('overflow', 'visible');


// setup the scale functions
const xScale = d3.scaleLinear()
  .domain([0, dataset.length])
  .range([yAxisPadding, width - nonAxisPadding]);

const yScale = d3.scaleLinear()
  .domain([0, 20000])
  .range([height - yAxisPadding, nonAxisPadding]);


// populate the graph
svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('x', (d, i) => xScale(i))
   .attr('y', d => yScale(d.amount))
   .attr('class', 'bar')
   .attr('width', width / dataset.length)
   .attr('height', d => height - yScale(d.amount) - xAxisPadding)
   .append('title')
   .text(d => `${d.year}: Quarter ${d.quarter}\n$${(d.amount).toLocaleString()} Billion`);


/*
  create the axes
*/
// override x axis tick labels
const tickValues = [0, 40, 80, 120, 160, 200, 240, 281];

// starts in 1947 with 4 quarters per year
const tickLabels = tickValues.map(x => Math.floor(x / 4) + 1947);

// create the x axis
const xAxis = d3.axisBottom(xScale)
  .tickValues(tickValues)
  .tickFormat((x, i) => tickLabels[i])
  .tickSizeOuter(0); // get rid of last tick on x axis

svg.append('g')
   .attr('transform', `translate(0, ${height - xAxisPadding})`)
   .call(xAxis);

// x axis title
svg.append('text')
  .attr('transform', 'translate(520, 400)')
  .attr('font-size', '13')
  .text('Source: https://fred.stlouisfed.org/series/GDP');


// create the y axis
const yAxis = d3.axisLeft(yScale);

svg.append('g')
   .attr('transform', `translate(${yAxisPadding}, 0)`)
   .call(yAxis);

// y axis title
svg.append('text')
  .attr('transform', 'translate(70, 190)rotate(270)')
  .attr('fill', '222')
  .text('GDP in Billions of Dollars');

// increase the font size size of the labels on the axes
svg.selectAll('g')
   .attr('font-size', '14');
