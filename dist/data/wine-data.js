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
    summaryPosition: {
      cx: 129,
      cy: 195
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
    summaryPosition: {
      cx: 460,
      cy: 195
    },
    color: 'red',
    description: "Cabernet Sauvignon is the most popular red wine grape, and is a mix between Cabernet Franc and Sauvignon Blanc. It full-bodied and pairs well with flavorful dishes."
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
    summaryPosition: {
      cx: 794,
      cy: 195
    },
    color: 'red',
    description: "Merlot and Cabernet Sauvignon are often confused, but Merlot may have chocolate notes. It’s a great wine to experiment with, and pairs with a lot of foods!"
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
    summaryPosition: {
      cx: 129,
      cy: 385
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
    summaryPosition: {
      cx: 460,
      cy: 385
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
    summaryPosition: {
      cx: 794,
      cy: 385
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
    summaryPosition: {
      cx: 129,
      cy: 555
    },
    color: 'pink',
    description: "Any Rosé wine can be produced in a sweet style by not fermenting all the sugar into alcohol! Pink Moscato is a well known sweet Rosé and pairs well with lighter foods."
  },
  {
    _id: 7,
    variety: 'Pinot Grigio',
    hex: '#f4fbab',
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
    summaryPosition: {
      cx: 460,
      cy: 555
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
    summaryPosition: {
      cx: 794,
      cy: 555
    },
    color: 'white',
    description: "Moscato is tropical and floral, and famous for being sweet. It’s a great pairing for Asian cuisines, and handles spicy food well. It also goes well with spices like ginger!"
  },
  {
    _id: 9,
    variety: 'White Zinfandel',
    hex: '#ffc2b2',
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
    summaryPosition: {
      cx: 129,
      cy: 767
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
    summaryPosition: {
      cx: 460,
      cy: 767
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
    summaryPosition: {
      cx: 794,
      cy: 767
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
