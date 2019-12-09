const wineData = [
  {
    _id: 0,
    variety: 'Pinot Noir',
    hex: '#9c1e30',
    startPosition: {
      cx: 200,
    },
    colorPosition: {
      cx: 0.75,
    },
    sugarPosition: {
      cx: 0.7,
    },
    boldPosition: {
      cx: 0.4,
    },
    flavorPosition: {
      cx: 940,
      cy: 200,
    },
    glassPosition: {
      cx: 1,
      cy: 150,
    },
    temperaturePosition: {
      cx: 2,
      cy: 150,
    },
    color: 'red',
    color_cx: 650,
    color_cy: 400,
  },
  {
    _id: 1,
    variety: 'Cabernet Sauvignon',
    hex: '#68171b',
    startPosition: {
      cx: 360,
    },
    colorPosition: {
      cx: 0.95,
    },
    sugarPosition: {
      cx: 0.1,
    },
    boldPosition: {
      cx: 0.9,
    },
    flavorPosition: {
      cx: 850,
      cy: 320,
    },
    glassPosition: {
      cx: 0,
      cy: 130,
    },
    temperaturePosition: {
      cx: 3,
      cy: 150,
    },
    color: 'red',
    color_cx: 720,
    color_cy: 400,
  },
  {
    _id: 2,
    variety: 'Merlot',
    hex: '#ab3e27',
    startPosition: {
      cx: 520,
    },
    colorPosition: {
      cx: 0.7,
    },
    sugarPosition: {
      cx: -0.1,
    },
    boldPosition: {
      cx: 0.7,
    },
    flavorPosition: {
      cx: 800,
      cy: 320,
    },
    glassPosition: {
      cx: 0,
      cy: 95,
    },
    temperaturePosition: {
      cx: 3,
      cy: 115,
    },
    color: 'red',
    color_cx: 790,
    color_cy: 400,
  },
  {
    _id: 3,
    variety: 'Sauvignon Blanc',
    hex: '#f7f5a7',
    startPosition: {
      cx: 0,
    },
    colorPosition: {
      cx: 0.048,
    },
    sugarPosition: {
      cx: 1.1,
    },
    boldPosition: {
      cx: 0.02,
    },
    flavorPosition: {
      cx: 720,
      cy: 280,
    },
    glassPosition: {
      cx: 4,
      cy: 170,
    },
    temperaturePosition: {
      cx: 1,
      cy: 80,
    },
    color: 'white',
    color_cx: 1200,
    color_cy: 400,
  },
  {
    _id: 4,
    variety: 'Chardonnay',
    hex: '#ead183',
    startPosition: {
      cx: 840,
    },
    colorPosition: {
      cx: 0.2,
    },
    sugarPosition: {
      cx: 1.9,
    },
    boldPosition: {
      cx: 0.47,
    },
    flavorPosition: {
      cx: 740,
      cy: 50,
    },
    glassPosition: {
      cx: 5,
      cy: 150,
    },
    temperaturePosition: {
      cx: 1,
      cy: 45,
    },
    color: 'white',
    color_cx: 1260,
    color_cy: 400,
  },
  {
    _id: 5,
    variety: 'Dry Rose Blends',
    hex: '#df6a72',
    startPosition: {
      cx: 1000,
    },
    colorPosition: {
      cx: 0.55,
    },
    sugarPosition: {
      cx: 2.1,
    },
    boldPosition: {
      cx: 0.52,
    },
    flavorPosition: {
      cx: 670,
      cy: 200,
    },
    glassPosition: {
      cx: 2,
      cy: 130,
    },
    temperaturePosition: {
      cx: 1,
      cy: 150,
    },
    color: 'pink',
    color_cx: 1000,
    color_cy: 400,
  },
  {
    _id: 6,
    variety: 'Sweet Rose Blends',
    hex: '#ffa696',
    startPosition: {
      cx: 200,
    },
    colorPosition: {
      cx: 0.5,
    },
    sugarPosition: {
      cx: 4.1,
    },
    boldPosition: {
      cx: 0.57,
    },
    flavorPosition: {
      cx: 670,
      cy: 250,
    },
    glassPosition: {
      cx: 2.1,
      cy: 95,
    },
    temperaturePosition: {
      cx: 1,
      cy: 115,
    },
    color: 'red',
    color_cx: 650,
    color_cy: 400,
  },
  {
    _id: 7,
    variety: 'Malbec',
    hex: '#890c1f',
    startPosition: {
      cx: 0.95,
    },
    colorPosition: {
      cx: 0.82,
    },
    sugarPosition: {
      cx: 0.9,
    },
    boldPosition: {
      cx: 0.95,
    },
    flavorPosition: {
      cx: 760,
      cy: 300,
    },
    glassPosition: {
      cx: 3,
      cy: 140,
    },
    temperaturePosition: {
      cx: 3,
      cy: 80,
    },
    color: 'red',
    color_cx: 720,
    color_cy: 400,
  },
  {
    _id: 8,
    variety: 'Pinot Grigio',
    hex: '#f4fbab',
    startPosition: {
      cx: 520,
    },
    colorPosition: {
      cx: 0.015,
    },
    sugarPosition: {
      cx: 1.3,
    },
    boldPosition: {
      cx: 0.25,
    },
    flavorPosition: {
      cx: 690,
      cy: 100,
    },
    glassPosition: {
      cx: 3.9,
      cy: 140,
    },
    temperaturePosition: {
      cx: 1,
      cy: 10,
    },
    color: 'red',
    color_cx: 790,
    color_cy: 400,
  },
  {
    _id: 9,
    variety: 'Moscato',
    hex: '#fae55e',
    startPosition: {
      cx: 0.12,
    },
    colorPosition: {
      cx: 0.08,
    },
    sugarPosition: {
      cx: 3.9,
    },
    boldPosition: {
      cx: 0.1,
    },
    flavorPosition: {
      cx: 710,
      cy: 75,
    },
    glassPosition: {
      cx: 4.09,
      cy: 140,
    },
    temperaturePosition: {
      cx: 1,
      cy: -25,
    },
    color: 'white',
    color_cx: 1200,
    color_cy: 400,
  },
  {
    _id: 10,
    variety: 'Riesling',
    hex: '#ffc300',
    startPosition: {
      cx: 840,
    },
    colorPosition: {
      cx: 0.2,
    },
    sugarPosition: {
      cx: 2.9,
    },
    boldPosition: {
      cx: 0.15,
    },
    flavorPosition: {
      cx: 900,
      cy: 65,
    },
    glassPosition: {
      cx: 4,
      cy: 112,
    },
    temperaturePosition: {
      cx: 0,
      cy: 115,
    },
    color: 'white',
    color_cx: 1260,
    color_cy: 400,
  },
  {
    _id: 11,
    variety: 'White Zinfandel',
    hex: '#ffc2b2',
    startPosition: {
      cx: 1000,
    },
    colorPosition: {
      cx: 0.42,
    },
    sugarPosition: {
      cx: 3.1,
    },
    boldPosition: {
      cx: 0.05,
    },
    flavorPosition: {
      cx: 675,
      cy: 147,
    },
    glassPosition: {
      cx: 1.9,
      cy: 95,
    },
    temperaturePosition: {
      cx: 0,
      cy: 150,
    },
    color: 'pink',
    color_cx: 1000,
    color_cy: 400,
  },
];

const pairingData = [
  {food: 'vegetables', wine: [0, 5, 6, 8, 9]},
  {food: 'seafood', wine: [10, 8, 3, 11]},
  {food: 'pork', wine: [10, 11, 0, 3, 4, 8]},
  {food: 'poultry', wine: [10, 8, 3, 7, 11]},
  {food: 'redmeat', wine: [11, 0, 2, 7, 1]},
];
