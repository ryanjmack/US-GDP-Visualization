/*
  Exports an object which contains data used for the bar chart
*/

/*
  NEW Data - taken from: https://fred.stlouisfed.org/series/GDP

  I wrote a quick script to convert the csv data to an array of objects
  so I could have more up to date data (up to Q1: 2018 instead of Q3: 2015)

  I had to replace the dataset because they account for inflation when
  looking back on GDP over time so the data became stale. 
*/
export const dataset = [
  {
    "year": 1947,
    "amount": 243.08,
    "quarter": 1
  },
  {
    "year": 1947,
    "amount": 246.267,
    "quarter": 2
  },
  {
    "year": 1947,
    "amount": 250.115,
    "quarter": 3
  },
  {
    "year": 1947,
    "amount": 260.309,
    "quarter": 4
  },
  {
    "year": 1948,
    "amount": 266.173,
    "quarter": 1
  },
  {
    "year": 1948,
    "amount": 272.897,
    "quarter": 2
  },
  {
    "year": 1948,
    "amount": 279.497,
    "quarter": 3
  },
  {
    "year": 1948,
    "amount": 280.656,
    "quarter": 4
  },
  {
    "year": 1949,
    "amount": 275.37,
    "quarter": 1
  },
  {
    "year": 1949,
    "amount": 271.692,
    "quarter": 2
  },
  {
    "year": 1949,
    "amount": 273.262,
    "quarter": 3
  },
  {
    "year": 1949,
    "amount": 270.984,
    "quarter": 4
  },
  {
    "year": 1950,
    "amount": 281.209,
    "quarter": 1
  },
  {
    "year": 1950,
    "amount": 290.735,
    "quarter": 2
  },
  {
    "year": 1950,
    "amount": 308.51,
    "quarter": 3
  },
  {
    "year": 1950,
    "amount": 320.32,
    "quarter": 4
  },
  {
    "year": 1951,
    "amount": 336.372,
    "quarter": 1
  },
  {
    "year": 1951,
    "amount": 344.455,
    "quarter": 2
  },
  {
    "year": 1951,
    "amount": 351.774,
    "quarter": 3
  },
  {
    "year": 1951,
    "amount": 356.579,
    "quarter": 4
  },
  {
    "year": 1952,
    "amount": 360.195,
    "quarter": 1
  },
  {
    "year": 1952,
    "amount": 361.414,
    "quarter": 2
  },
  {
    "year": 1952,
    "amount": 368.084,
    "quarter": 3
  },
  {
    "year": 1952,
    "amount": 381.241,
    "quarter": 4
  },
  {
    "year": 1953,
    "amount": 388.472,
    "quarter": 1
  },
  {
    "year": 1953,
    "amount": 392.259,
    "quarter": 2
  },
  {
    "year": 1953,
    "amount": 391.696,
    "quarter": 3
  },
  {
    "year": 1953,
    "amount": 386.521,
    "quarter": 4
  },
  {
    "year": 1954,
    "amount": 385.924,
    "quarter": 1
  },
  {
    "year": 1954,
    "amount": 386.716,
    "quarter": 2
  },
  {
    "year": 1954,
    "amount": 391.596,
    "quarter": 3
  },
  {
    "year": 1954,
    "amount": 400.348,
    "quarter": 4
  },
  {
    "year": 1955,
    "amount": 413.753,
    "quarter": 1
  },
  {
    "year": 1955,
    "amount": 422.226,
    "quarter": 2
  },
  {
    "year": 1955,
    "amount": 430.925,
    "quarter": 3
  },
  {
    "year": 1955,
    "amount": 437.787,
    "quarter": 4
  },
  {
    "year": 1956,
    "amount": 440.491,
    "quarter": 1
  },
  {
    "year": 1956,
    "amount": 446.771,
    "quarter": 2
  },
  {
    "year": 1956,
    "amount": 451.983,
    "quarter": 3
  },
  {
    "year": 1956,
    "amount": 461.278,
    "quarter": 4
  },
  {
    "year": 1957,
    "amount": 470.578,
    "quarter": 1
  },
  {
    "year": 1957,
    "amount": 472.835,
    "quarter": 2
  },
  {
    "year": 1957,
    "amount": 480.315,
    "quarter": 3
  },
  {
    "year": 1957,
    "amount": 475.681,
    "quarter": 4
  },
  {
    "year": 1958,
    "amount": 468.353,
    "quarter": 1
  },
  {
    "year": 1958,
    "amount": 472.786,
    "quarter": 2
  },
  {
    "year": 1958,
    "amount": 486.653,
    "quarter": 3
  },
  {
    "year": 1958,
    "amount": 500.38,
    "quarter": 4
  },
  {
    "year": 1959,
    "amount": 511.063,
    "quarter": 1
  },
  {
    "year": 1959,
    "amount": 524.241,
    "quarter": 2
  },
  {
    "year": 1959,
    "amount": 525.196,
    "quarter": 3
  },
  {
    "year": 1959,
    "amount": 529.322,
    "quarter": 4
  },
  {
    "year": 1960,
    "amount": 543.347,
    "quarter": 1
  },
  {
    "year": 1960,
    "amount": 542.697,
    "quarter": 2
  },
  {
    "year": 1960,
    "amount": 546.012,
    "quarter": 3
  },
  {
    "year": 1960,
    "amount": 541.063,
    "quarter": 4
  },
  {
    "year": 1961,
    "amount": 545.949,
    "quarter": 1
  },
  {
    "year": 1961,
    "amount": 557.43,
    "quarter": 2
  },
  {
    "year": 1961,
    "amount": 568.228,
    "quarter": 3
  },
  {
    "year": 1961,
    "amount": 581.624,
    "quarter": 4
  },
  {
    "year": 1962,
    "amount": 595.176,
    "quarter": 1
  },
  {
    "year": 1962,
    "amount": 602.58,
    "quarter": 2
  },
  {
    "year": 1962,
    "amount": 609.575,
    "quarter": 3
  },
  {
    "year": 1962,
    "amount": 613.132,
    "quarter": 4
  },
  {
    "year": 1963,
    "amount": 622.679,
    "quarter": 1
  },
  {
    "year": 1963,
    "amount": 631.835,
    "quarter": 2
  },
  {
    "year": 1963,
    "amount": 644.96,
    "quarter": 3
  },
  {
    "year": 1963,
    "amount": 654.84,
    "quarter": 4
  },
  {
    "year": 1964,
    "amount": 671.149,
    "quarter": 1
  },
  {
    "year": 1964,
    "amount": 680.757,
    "quarter": 2
  },
  {
    "year": 1964,
    "amount": 692.807,
    "quarter": 3
  },
  {
    "year": 1964,
    "amount": 698.424,
    "quarter": 4
  },
  {
    "year": 1965,
    "amount": 719.248,
    "quarter": 1
  },
  {
    "year": 1965,
    "amount": 732.369,
    "quarter": 2
  },
  {
    "year": 1965,
    "amount": 750.184,
    "quarter": 3
  },
  {
    "year": 1965,
    "amount": 773.104,
    "quarter": 4
  },
  {
    "year": 1966,
    "amount": 797.328,
    "quarter": 1
  },
  {
    "year": 1966,
    "amount": 807.153,
    "quarter": 2
  },
  {
    "year": 1966,
    "amount": 820.798,
    "quarter": 3
  },
  {
    "year": 1966,
    "amount": 834.864,
    "quarter": 4
  },
  {
    "year": 1967,
    "amount": 846.046,
    "quarter": 1
  },
  {
    "year": 1967,
    "amount": 851.058,
    "quarter": 2
  },
  {
    "year": 1967,
    "amount": 866.614,
    "quarter": 3
  },
  {
    "year": 1967,
    "amount": 883.201,
    "quarter": 4
  },
  {
    "year": 1968,
    "amount": 911.135,
    "quarter": 1
  },
  {
    "year": 1968,
    "amount": 936.297,
    "quarter": 2
  },
  {
    "year": 1968,
    "amount": 952.347,
    "quarter": 3
  },
  {
    "year": 1968,
    "amount": 970.129,
    "quarter": 4
  },
  {
    "year": 1969,
    "amount": 995.419,
    "quarter": 1
  },
  {
    "year": 1969,
    "amount": 1011.361,
    "quarter": 2
  },
  {
    "year": 1969,
    "amount": 1032.016,
    "quarter": 3
  },
  {
    "year": 1969,
    "amount": 1040.741,
    "quarter": 4
  },
  {
    "year": 1970,
    "amount": 1053.528,
    "quarter": 1
  },
  {
    "year": 1970,
    "amount": 1070.11,
    "quarter": 2
  },
  {
    "year": 1970,
    "amount": 1088.461,
    "quarter": 3
  },
  {
    "year": 1970,
    "amount": 1091.462,
    "quarter": 4
  },
  {
    "year": 1971,
    "amount": 1137.812,
    "quarter": 1
  },
  {
    "year": 1971,
    "amount": 1159.355,
    "quarter": 2
  },
  {
    "year": 1971,
    "amount": 1180.313,
    "quarter": 3
  },
  {
    "year": 1971,
    "amount": 1193.585,
    "quarter": 4
  },
  {
    "year": 1972,
    "amount": 1233.807,
    "quarter": 1
  },
  {
    "year": 1972,
    "amount": 1270.122,
    "quarter": 2
  },
  {
    "year": 1972,
    "amount": 1293.837,
    "quarter": 3
  },
  {
    "year": 1972,
    "amount": 1332.023,
    "quarter": 4
  },
  {
    "year": 1973,
    "amount": 1380.68,
    "quarter": 1
  },
  {
    "year": 1973,
    "amount": 1417.595,
    "quarter": 2
  },
  {
    "year": 1973,
    "amount": 1436.813,
    "quarter": 3
  },
  {
    "year": 1973,
    "amount": 1479.069,
    "quarter": 4
  },
  {
    "year": 1974,
    "amount": 1494.654,
    "quarter": 1
  },
  {
    "year": 1974,
    "amount": 1534.22,
    "quarter": 2
  },
  {
    "year": 1974,
    "amount": 1563.396,
    "quarter": 3
  },
  {
    "year": 1974,
    "amount": 1603.004,
    "quarter": 4
  },
  {
    "year": 1975,
    "amount": 1619.553,
    "quarter": 1
  },
  {
    "year": 1975,
    "amount": 1656.448,
    "quarter": 2
  },
  {
    "year": 1975,
    "amount": 1713.812,
    "quarter": 3
  },
  {
    "year": 1975,
    "amount": 1765.867,
    "quarter": 4
  },
  {
    "year": 1976,
    "amount": 1824.509,
    "quarter": 1
  },
  {
    "year": 1976,
    "amount": 1856.944,
    "quarter": 2
  },
  {
    "year": 1976,
    "amount": 1890.5,
    "quarter": 3
  },
  {
    "year": 1976,
    "amount": 1938.413,
    "quarter": 4
  },
  {
    "year": 1977,
    "amount": 1992.534,
    "quarter": 1
  },
  {
    "year": 1977,
    "amount": 2060.165,
    "quarter": 2
  },
  {
    "year": 1977,
    "amount": 2122.387,
    "quarter": 3
  },
  {
    "year": 1977,
    "amount": 2168.716,
    "quarter": 4
  },
  {
    "year": 1978,
    "amount": 2208.688,
    "quarter": 1
  },
  {
    "year": 1978,
    "amount": 2336.563,
    "quarter": 2
  },
  {
    "year": 1978,
    "amount": 2398.866,
    "quarter": 3
  },
  {
    "year": 1978,
    "amount": 2482.159,
    "quarter": 4
  },
  {
    "year": 1979,
    "amount": 2531.555,
    "quarter": 1
  },
  {
    "year": 1979,
    "amount": 2595.909,
    "quarter": 2
  },
  {
    "year": 1979,
    "amount": 2670.388,
    "quarter": 3
  },
  {
    "year": 1979,
    "amount": 2730.705,
    "quarter": 4
  },
  {
    "year": 1980,
    "amount": 2796.523,
    "quarter": 1
  },
  {
    "year": 1980,
    "amount": 2799.938,
    "quarter": 2
  },
  {
    "year": 1980,
    "amount": 2860.044,
    "quarter": 3
  },
  {
    "year": 1980,
    "amount": 2993.525,
    "quarter": 4
  },
  {
    "year": 1981,
    "amount": 3131.799,
    "quarter": 1
  },
  {
    "year": 1981,
    "amount": 3167.251,
    "quarter": 2
  },
  {
    "year": 1981,
    "amount": 3261.203,
    "quarter": 3
  },
  {
    "year": 1981,
    "amount": 3283.536,
    "quarter": 4
  },
  {
    "year": 1982,
    "amount": 3273.809,
    "quarter": 1
  },
  {
    "year": 1982,
    "amount": 3331.281,
    "quarter": 2
  },
  {
    "year": 1982,
    "amount": 3367.072,
    "quarter": 3
  },
  {
    "year": 1982,
    "amount": 3407.81,
    "quarter": 4
  },
  {
    "year": 1983,
    "amount": 3480.321,
    "quarter": 1
  },
  {
    "year": 1983,
    "amount": 3583.844,
    "quarter": 2
  },
  {
    "year": 1983,
    "amount": 3692.257,
    "quarter": 3
  },
  {
    "year": 1983,
    "amount": 3796.121,
    "quarter": 4
  },
  {
    "year": 1984,
    "amount": 3912.774,
    "quarter": 1
  },
  {
    "year": 1984,
    "amount": 4015,
    "quarter": 2
  },
  {
    "year": 1984,
    "amount": 4087.378,
    "quarter": 3
  },
  {
    "year": 1984,
    "amount": 4147.606,
    "quarter": 4
  },
  {
    "year": 1985,
    "amount": 4237.01,
    "quarter": 1
  },
  {
    "year": 1985,
    "amount": 4302.297,
    "quarter": 2
  },
  {
    "year": 1985,
    "amount": 4394.563,
    "quarter": 3
  },
  {
    "year": 1985,
    "amount": 4453.105,
    "quarter": 4
  },
  {
    "year": 1986,
    "amount": 4516.344,
    "quarter": 1
  },
  {
    "year": 1986,
    "amount": 4555.245,
    "quarter": 2
  },
  {
    "year": 1986,
    "amount": 4619.627,
    "quarter": 3
  },
  {
    "year": 1986,
    "amount": 4669.396,
    "quarter": 4
  },
  {
    "year": 1987,
    "amount": 4736.231,
    "quarter": 1
  },
  {
    "year": 1987,
    "amount": 4821.459,
    "quarter": 2
  },
  {
    "year": 1987,
    "amount": 4900.509,
    "quarter": 3
  },
  {
    "year": 1987,
    "amount": 5022.67,
    "quarter": 4
  },
  {
    "year": 1988,
    "amount": 5090.615,
    "quarter": 1
  },
  {
    "year": 1988,
    "amount": 5207.707,
    "quarter": 2
  },
  {
    "year": 1988,
    "amount": 5299.486,
    "quarter": 3
  },
  {
    "year": 1988,
    "amount": 5412.713,
    "quarter": 4
  },
  {
    "year": 1989,
    "amount": 5527.352,
    "quarter": 1
  },
  {
    "year": 1989,
    "amount": 5628.429,
    "quarter": 2
  },
  {
    "year": 1989,
    "amount": 5711.556,
    "quarter": 3
  },
  {
    "year": 1989,
    "amount": 5763.444,
    "quarter": 4
  },
  {
    "year": 1990,
    "amount": 5890.835,
    "quarter": 1
  },
  {
    "year": 1990,
    "amount": 5974.665,
    "quarter": 2
  },
  {
    "year": 1990,
    "amount": 6029.504,
    "quarter": 3
  },
  {
    "year": 1990,
    "amount": 6023.332,
    "quarter": 4
  },
  {
    "year": 1991,
    "amount": 6054.867,
    "quarter": 1
  },
  {
    "year": 1991,
    "amount": 6143.612,
    "quarter": 2
  },
  {
    "year": 1991,
    "amount": 6218.425,
    "quarter": 3
  },
  {
    "year": 1991,
    "amount": 6279.296,
    "quarter": 4
  },
  {
    "year": 1992,
    "amount": 6380.798,
    "quarter": 1
  },
  {
    "year": 1992,
    "amount": 6492.299,
    "quarter": 2
  },
  {
    "year": 1992,
    "amount": 6586.548,
    "quarter": 3
  },
  {
    "year": 1992,
    "amount": 6697.553,
    "quarter": 4
  },
  {
    "year": 1993,
    "amount": 6748.182,
    "quarter": 1
  },
  {
    "year": 1993,
    "amount": 6829.594,
    "quarter": 2
  },
  {
    "year": 1993,
    "amount": 6904.222,
    "quarter": 3
  },
  {
    "year": 1993,
    "amount": 7032.844,
    "quarter": 4
  },
  {
    "year": 1994,
    "amount": 7136.259,
    "quarter": 1
  },
  {
    "year": 1994,
    "amount": 7269.847,
    "quarter": 2
  },
  {
    "year": 1994,
    "amount": 7352.255,
    "quarter": 3
  },
  {
    "year": 1994,
    "amount": 7476.661,
    "quarter": 4
  },
  {
    "year": 1995,
    "amount": 7545.296,
    "quarter": 1
  },
  {
    "year": 1995,
    "amount": 7604.923,
    "quarter": 2
  },
  {
    "year": 1995,
    "amount": 7706.531,
    "quarter": 3
  },
  {
    "year": 1995,
    "amount": 7799.493,
    "quarter": 4
  },
  {
    "year": 1996,
    "amount": 7893.146,
    "quarter": 1
  },
  {
    "year": 1996,
    "amount": 8061.535,
    "quarter": 2
  },
  {
    "year": 1996,
    "amount": 8159.043,
    "quarter": 3
  },
  {
    "year": 1996,
    "amount": 8287.078,
    "quarter": 4
  },
  {
    "year": 1997,
    "amount": 8402.06,
    "quarter": 1
  },
  {
    "year": 1997,
    "amount": 8551.94,
    "quarter": 2
  },
  {
    "year": 1997,
    "amount": 8691.756,
    "quarter": 3
  },
  {
    "year": 1997,
    "amount": 8788.32,
    "quarter": 4
  },
  {
    "year": 1998,
    "amount": 8889.732,
    "quarter": 1
  },
  {
    "year": 1998,
    "amount": 8994.738,
    "quarter": 2
  },
  {
    "year": 1998,
    "amount": 9146.521,
    "quarter": 3
  },
  {
    "year": 1998,
    "amount": 9325.65,
    "quarter": 4
  },
  {
    "year": 1999,
    "amount": 9447.103,
    "quarter": 1
  },
  {
    "year": 1999,
    "amount": 9557.005,
    "quarter": 2
  },
  {
    "year": 1999,
    "amount": 9712.28,
    "quarter": 3
  },
  {
    "year": 1999,
    "amount": 9926.101,
    "quarter": 4
  },
  {
    "year": 2000,
    "amount": 10031.031,
    "quarter": 1
  },
  {
    "year": 2000,
    "amount": 10278.34,
    "quarter": 2
  },
  {
    "year": 2000,
    "amount": 10357.445,
    "quarter": 3
  },
  {
    "year": 2000,
    "amount": 10472.285,
    "quarter": 4
  },
  {
    "year": 2001,
    "amount": 10508.121,
    "quarter": 1
  },
  {
    "year": 2001,
    "amount": 10638.384,
    "quarter": 2
  },
  {
    "year": 2001,
    "amount": 10639.486,
    "quarter": 3
  },
  {
    "year": 2001,
    "amount": 10701.317,
    "quarter": 4
  },
  {
    "year": 2002,
    "amount": 10834.445,
    "quarter": 1
  },
  {
    "year": 2002,
    "amount": 10934.752,
    "quarter": 2
  },
  {
    "year": 2002,
    "amount": 11037.057,
    "quarter": 3
  },
  {
    "year": 2002,
    "amount": 11103.834,
    "quarter": 4
  },
  {
    "year": 2003,
    "amount": 11230.078,
    "quarter": 1
  },
  {
    "year": 2003,
    "amount": 11370.653,
    "quarter": 2
  },
  {
    "year": 2003,
    "amount": 11625.137,
    "quarter": 3
  },
  {
    "year": 2003,
    "amount": 11816.827,
    "quarter": 4
  },
  {
    "year": 2004,
    "amount": 11988.403,
    "quarter": 1
  },
  {
    "year": 2004,
    "amount": 12181.398,
    "quarter": 2
  },
  {
    "year": 2004,
    "amount": 12367.744,
    "quarter": 3
  },
  {
    "year": 2004,
    "amount": 12562.163,
    "quarter": 4
  },
  {
    "year": 2005,
    "amount": 12813.729,
    "quarter": 1
  },
  {
    "year": 2005,
    "amount": 12974.083,
    "quarter": 2
  },
  {
    "year": 2005,
    "amount": 13205.445,
    "quarter": 3
  },
  {
    "year": 2005,
    "amount": 13381.629,
    "quarter": 4
  },
  {
    "year": 2006,
    "amount": 13648.904,
    "quarter": 1
  },
  {
    "year": 2006,
    "amount": 13799.794,
    "quarter": 2
  },
  {
    "year": 2006,
    "amount": 13908.498,
    "quarter": 3
  },
  {
    "year": 2006,
    "amount": 14066.37,
    "quarter": 4
  },
  {
    "year": 2007,
    "amount": 14233.226,
    "quarter": 1
  },
  {
    "year": 2007,
    "amount": 14422.313,
    "quarter": 2
  },
  {
    "year": 2007,
    "amount": 14569.675,
    "quarter": 3
  },
  {
    "year": 2007,
    "amount": 14685.33,
    "quarter": 4
  },
  {
    "year": 2008,
    "amount": 14668.445,
    "quarter": 1
  },
  {
    "year": 2008,
    "amount": 14812.974,
    "quarter": 2
  },
  {
    "year": 2008,
    "amount": 14842.983,
    "quarter": 3
  },
  {
    "year": 2008,
    "amount": 14549.949,
    "quarter": 4
  },
  {
    "year": 2009,
    "amount": 14383.885,
    "quarter": 1
  },
  {
    "year": 2009,
    "amount": 14340.417,
    "quarter": 2
  },
  {
    "year": 2009,
    "amount": 14384.145,
    "quarter": 3
  },
  {
    "year": 2009,
    "amount": 14566.511,
    "quarter": 4
  },
  {
    "year": 2010,
    "amount": 14681.063,
    "quarter": 1
  },
  {
    "year": 2010,
    "amount": 14888.6,
    "quarter": 2
  },
  {
    "year": 2010,
    "amount": 15057.66,
    "quarter": 3
  },
  {
    "year": 2010,
    "amount": 15230.208,
    "quarter": 4
  },
  {
    "year": 2011,
    "amount": 15238.371,
    "quarter": 1
  },
  {
    "year": 2011,
    "amount": 15460.926,
    "quarter": 2
  },
  {
    "year": 2011,
    "amount": 15587.125,
    "quarter": 3
  },
  {
    "year": 2011,
    "amount": 15785.312,
    "quarter": 4
  },
  {
    "year": 2012,
    "amount": 15973.881,
    "quarter": 1
  },
  {
    "year": 2012,
    "amount": 16121.851,
    "quarter": 2
  },
  {
    "year": 2012,
    "amount": 16227.939,
    "quarter": 3
  },
  {
    "year": 2012,
    "amount": 16297.349,
    "quarter": 4
  },
  {
    "year": 2013,
    "amount": 16475.44,
    "quarter": 1
  },
  {
    "year": 2013,
    "amount": 16541.39,
    "quarter": 2
  },
  {
    "year": 2013,
    "amount": 16749.349,
    "quarter": 3
  },
  {
    "year": 2013,
    "amount": 16999.888,
    "quarter": 4
  },
  {
    "year": 2014,
    "amount": 17031.324,
    "quarter": 1
  },
  {
    "year": 2014,
    "amount": 17320.921,
    "quarter": 2
  },
  {
    "year": 2014,
    "amount": 17622.257,
    "quarter": 3
  },
  {
    "year": 2014,
    "amount": 17735.933,
    "quarter": 4
  },
  {
    "year": 2015,
    "amount": 17874.715,
    "quarter": 1
  },
  {
    "year": 2015,
    "amount": 18093.224,
    "quarter": 2
  },
  {
    "year": 2015,
    "amount": 18227.689,
    "quarter": 3
  },
  {
    "year": 2015,
    "amount": 18287.226,
    "quarter": 4
  },
  {
    "year": 2016,
    "amount": 18325.187,
    "quarter": 1
  },
  {
    "year": 2016,
    "amount": 18538.039,
    "quarter": 2
  },
  {
    "year": 2016,
    "amount": 18729.13,
    "quarter": 3
  },
  {
    "year": 2016,
    "amount": 18905.545,
    "quarter": 4
  },
  {
    "year": 2017,
    "amount": 19057.705,
    "quarter": 1
  },
  {
    "year": 2017,
    "amount": 19250.009,
    "quarter": 2
  },
  {
    "year": 2017,
    "amount": 19500.602,
    "quarter": 3
  },
  {
    "year": 2017,
    "amount": 19754.102,
    "quarter": 4
  },
  {
    "year": 2018,
    "amount": 19960.097,
    "quarter": 1
  }
]
