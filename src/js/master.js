/*
  File that utilizes D3.js to visualize some data
*/

import { dataset } from './data.js';

const height = 500;
const width = 750;

const svg = d3.select('main')
              .append('svg')
              .attr('width', width)
              .attr('height', height);
