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
    temperaturePosition: {
      cx: 0,
      cy: 150,
    },
    summaryPosition: {
      cx: 120,
      cy: 320
    },
    color: 'red',
    description: "Pinot is the most popular light-bodied red wine. It’s versatile and can be paired with many foods. Fun fact: Pinot Noir & Chardonnay grow in the same climate!"
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
    temperaturePosition: {
      cx: 1,
      cy: 120,
    },
    summaryPosition: {
      cx: 500,
      cy: 320
    },
    color: 'red',
    description: "Cabernet Sauvignon is the most popular red wine grape, and is a mix between Cabernet Franc and Sauvignon Blanc. It full-bodied and pairs well with flavorful dishes."
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
    temperaturePosition: {
      cx: 2,
      cy: 90,
    },
    summaryPosition: {
      cx: 880,
      cy: 320
    },
    color: 'red',
    description: "Merlot and Cabernet Sauvignon are often confused, but Merlot may have chocolate notes. It’s a great wine to experiment with, and pairs with a lot of foods!"
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
    temperaturePosition: {
      cx: 3,
      cy: 60,
    },
    summaryPosition: {
      cx: 120,
      cy: 600
    },
    color: 'white',
    description: "This is a dry white wine with light body. It is unique with its herbal flavors, like bell pepper and grass. Pair with any dish with green herbs and it’ll be a hit!"
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
    temperaturePosition: {
      cx: 3,
      cy: 30,
    },
    summaryPosition: {
      cx: 500,
      cy: 600
    },
    color: 'white',
    description: "Chardonnay is produced in many styles. With tropical notes, this wine goes well with creamy, buttery flavors and textures that can be found in Brie and lobster!"
  },
  {
    _id: 5,
    variety: 'Dry Rosé Blends',
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
    temperaturePosition: {
      cx: 3,
      cy: 90,
    },
    summaryPosition: {
      cx: 880,
      cy: 600
    },
    color: 'pink',
    description: "Dry Rosé Wines are actually the most commonly produced rosés! These blends go well with lighter dishes, especially seafood and goat cheese."
  },
  {
    _id: 6,
    variety: 'Sweet Rosé Blends',
    hex: '#ff6498',
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
    temperaturePosition: {
      cx: 3,
      cy: 120,
    },
    summaryPosition: {
      cx: 120,
      cy: 880
    },
    color: 'pink',
    description: "Any Rosé wine can be produced in a sweet style by not fermenting all the sugar into alcohol! Pink Moscato is a well known sweet Rosé and pairs well with lighter foods."
  },
  {
    _id: 7,
    variety: 'Pinot Grigio',
    hex: '#f4fbab',
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
    temperaturePosition: {
      cx: 3,
      cy: 150,
    },
    summaryPosition: {
      cx: 500,
      cy: 880
    },
    color: 'white',
    description: "Pinot Gris and Pinot Grigio are actually the same wine. It’s refreshing and slightly acidic. and goes well with fresh foods like fish and seafood."
  },
  {
    _id: 8,
    variety: 'Moscato',
    hex: '#fae55e',
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
    temperaturePosition: {
      cx: 3,
      cy: 60,
    },
    summaryPosition: {
      cx: 880,
      cy: 880
    },
    color: 'white',
    description: "Moscato is tropical and floral, and famous for being sweet. It’s a great pairing for Asian cuisines, and handles spicy food well. It also goes well with spices like ginger!"
  },
  {
    _id: 9,
    variety: 'White Zinfandel',
    hex: '#ffc2b2',
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
    temperaturePosition: {
      cx: 3,
      cy: 60,
    },
    summaryPosition: {
      cx: 120,
      cy: 1160
    },
    color: 'white',
    description: "White Zinfandel can also be categorized as a “blush” wine. It can be great as a dessert wine! White Zinfandel pairs especially well with strawberries."
  },
  {
    _id: 10,
    variety: 'Riesling',
    hex: '#ffc300',
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
    temperaturePosition: {
      cx: 3,
      cy: 60,
    },
    summaryPosition: {
      cx: 500,
      cy: 1160
    },
    color: 'white',
    description: "Riesling can vary in its sweetness, from bone dry to very sweet. Off-dry Riesling can be a great pairing for Indian or Asian cuisines, and goes well with spice."
  },
  {
    _id: 11,
    variety: 'Malbec',
    hex: '#890c1f',
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
    temperaturePosition: {
      cx: 3,
      cy: 60,
    },
    summaryPosition: {
      cx: 880,
      cy: 1160
    },
    color: 'red',
    description: "Malbec is the most popular wine variety produced in Argentina, where the sunny climate helps it grow. It’s great with some lean red meat and blue cheese!"
  },
];

const pairingData = [
  {food: 'vegetables', wine: [0, 5, 6, 8, 9]},
  {food: 'seafood', wine: [10, 8, 3, 11]},
  {food: 'pork', wine: [10, 11, 0, 3, 4, 8]},
  {food: 'poultry', wine: [10, 8, 3, 7, 11]},
  {food: 'redmeat', wine: [11, 0, 2, 7, 1]},
];
