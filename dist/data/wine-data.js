const wineData = [
  {
    _id: 0,
    variety: 'Pinot Noir',
    hex: '#ad2e41',
    startPosition: {
      cx: 200,
    },
    colorPosition: {
      cx: 0.02,
    },
    sugarPosition: {
      cx: -0.1,
    },
    boldPosition: {
      cx: 0.02,
    },
    flavorPosition: {
      cx: 730,
      cy: 50,
    },
    glassPosition: {
      cx: 0,
      cy: 120,
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
      cx: 0.42,
    },
    sugarPosition: {
      cx: 0.1,
    },
    boldPosition: {
      cx: 0.34,
    },
    flavorPosition: {
      cx: 850,
      cy: 320,
    },
    glassPosition: {
      cx: 0,
      cy: 90,
    },
    color: 'red',
    color_cx: 720,
    color_cy: 400,
  },
  {
    _id: 2,
    variety: 'Merlot',
    hex: '#92321e',
    startPosition: {
      cx: 520,
    },
    colorPosition: {
      cx: 0.45,
    },
    sugarPosition: {
      cx: 0.7,
    },
    boldPosition: {
      cx: 0.98,
    },
    flavorPosition: {
      cx: 800,
      cy: 320,
    },
    glassPosition: {
      cx: 0,
      cy: 60,
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
      cx: 680,
    },
    colorPosition: {
      cx: 0.51,
    },
    sugarPosition: {
      cx: 1.1,
    },
    boldPosition: {
      cx: 0.74,
    },
    flavorPosition: {
      cx: 950,
      cy: 220,
    },
    glassPosition: {
      cx: 5,
      cy: 120,
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
      cx: 0.23,
    },
    sugarPosition: {
      cx: 1.9,
    },
    boldPosition: {
      cx: 0.67,
    },
    flavorPosition: {
      cx: 650,
      cy: 220,
    },
    glassPosition: {
      cx: 4,
      cy: 120,
    },
    color: 'white',
    color_cx: 1260,
    color_cy: 400,
  },
  {
    _id: 5,
    variety: 'Rose',
    hex: '#df6a72',
    startPosition: {
      cx: 1000,
    },
    colorPosition: {
      cx: 0.97,
    },
    sugarPosition: {
      cx: 2.1,
    },
    boldPosition: {
      cx: 0.56,
    },
    flavorPosition: {
      cx: 870,
      cy: 50,
    },
    glassPosition: {
      cx: 3,
      cy: 120,
    },
    color: 'pink',
    color_cx: 1000,
    color_cy: 400,
  },
  {
    _id: 6,
    variety: 'Pinot Noir',
    hex: '#ad2e41',
    startPosition: {
      cx: 200,
    },
    colorPosition: {
      cx: 0.78,
    },
    sugarPosition: {
      cx: 2.9,
    },
    boldPosition: {
      cx: 0.24,
    },
    flavorPosition: {
      cx: 870,
      cy: 100,
    },
    glassPosition: {
      cx: 2,
      cy: 120,
    },
    color: 'red',
    color_cx: 650,
    color_cy: 400,
  },
  {
    _id: 7,
    variety: 'Cabernet Sauvignon',
    hex: '#68171b',
    startPosition: {
      cx: 0.89,
    },
    colorPosition: {
      cx: 912,
    },
    sugarPosition: {
      cx: 3.1,
    },
    boldPosition: {
      cx: 0.87,
    },
    flavorPosition: {
      cx: 770,
      cy: 100,
    },
    glassPosition: {
      cx: 1,
      cy: 120,
    },
    color: 'red',
    color_cx: 720,
    color_cy: 400,
  },
  {
    _id: 8,
    variety: 'Merlot',
    hex: '#92321e',
    startPosition: {
      cx: 520,
    },
    colorPosition: {
      cx: 0.68,
    },
    sugarPosition: {
      cx: 3.9,
    },
    boldPosition: {
      cx: 0.46,
    },
    flavorPosition: {
      cx: 770,
      cy: 100,
    },
    glassPosition: {
      cx: 2,
      cy: 120,
    },
    color: 'red',
    color_cx: 790,
    color_cy: 400,
  },
  {
    _id: 9,
    variety: 'Sauvignon Blanc',
    hex: '#f7f5a7',
    startPosition: {
      cx: 0.58,
    },
    colorPosition: {
      cx: 490,
    },
    sugarPosition: {
      cx: 4.1,
    },
    boldPosition: {
      cx: 0.24,
    },
    flavorPosition: {
      cx: 770,
      cy: 100,
    },
    glassPosition: {
      cx: 2,
      cy: 120,
    },
    color: 'white',
    color_cx: 1200,
    color_cy: 400,
  },
  {
    _id: 10,
    variety: 'Chardonnay',
    hex: '#ead183',
    startPosition: {
      cx: 840,
    },
    colorPosition: {
      cx: 0.44,
    },
    sugarPosition: {
      cx: 4.2,
    },
    boldPosition: {
      cx: 0.82,
    },
    flavorPosition: {
      cx: 770,
      cy: 100,
    },
    glassPosition: {
      cx: 2,
      cy: 120,
    },
    color: 'white',
    color_cx: 1260,
    color_cy: 400,
  },
  {
    _id: 11,
    variety: 'Rose',
    hex: '#df6a72',
    startPosition: {
      cx: 1000,
    },
    colorPosition: {
      cx: 0.81,
    },
    sugarPosition: {
      cx: 2.8,
    },
    boldPosition: {
      cx: 0.21,
    },
    flavorPosition: {
      cx: 770,
      cy: 100,
    },
    glassPosition: {
      cx: 2,
      cy: 120,
    },
    color: 'pink',
    color_cx: 1000,
    color_cy: 400,
  },
];
