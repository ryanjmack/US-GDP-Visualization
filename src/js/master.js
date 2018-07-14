/*
  File that utilizes D3.js to visualize some data
*/

import { dataset } from './data.js';

const height = 350;
const width = 700;
const startYear = 1947;
const lastYear = 2018;

const svg = d3.select('main')
              .append('svg')
              .attr('width', width)
              .attr('height', height);


// setup the scale functions
const xScale = d3.scaleLinear()
  .domain([0, dataset.length])
  .range([0, width]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, d => d.amount)])
  .range([height, 0]);

// populate the graph with bars
svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('x', (d, i) => xScale(i))
   .attr('y', d => yScale(d.amount))
   .attr('class', 'bar')
   .attr('width', width / dataset.length)
   .attr('height', d => height - yScale(d.amount))
   .append('title')
   .text(d => `${d.year}: Quarter ${d.quarter}\n$${d.amount} Billions`);
