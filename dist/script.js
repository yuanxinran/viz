document.getElementById('dots-svg').addEventListener('load', adjustSVGSize);

const controller = new ScrollMagic.Controller();

function adjustSVGSize() {
  let height = document.getElementById('viz').offsetHeight;

  document.getElementById('dots-svg').style.height = height;
}
window.onresize = adjustSVGSize;

$(document).ready(function() {
  drawInitialDots();
  const sceneIntro = new ScrollMagic.Scene({
    triggerElement: '#viz-intro',
    triggerHook: 0.6,
    duration: '100%',
  })
    .on('enter', function() {
      toStartAnimation();
    })
    .addTo(controller);

  const sceneColor = new ScrollMagic.Scene({
    triggerElement: '#viz-color',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toColorAnimation();
    })
    .addTo(controller);

  const sceneSugar = new ScrollMagic.Scene({
    triggerElement: '#viz-sugar',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toSugarAnimation();
    })
    .addTo(controller);

  const sceneBoldness = new ScrollMagic.Scene({
    triggerElement: '#viz-boldness',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toBoldnessAnimation();
    })
    .addTo(controller);

  const sceneFlavor = new ScrollMagic.Scene({
    triggerElement: '#viz-flavor',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toFlavorAnimation();
    })
    .addTo(controller);

  const sceneGlass = new ScrollMagic.Scene({
    triggerElement: '#viz-glass',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toGlassAnimation();
    })
    .addTo(controller);

  const sceneTemperature = new ScrollMagic.Scene({
    triggerElement: '#viz-temperature',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toTemperatureAnimation();
    })
    .addTo(controller);

  const scenePairing = new ScrollMagic.Scene({
    triggerElement: '#viz-pairing',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on('enter', function() {
      toPairingAnimation();
    })
    .addTo(controller);
});

function drawInitialDots() {
  let inBetween = (1000 - 200) / 11;
  let windowHeight = getWindowHeightForViz();

  wineData.forEach((wine, i) => {
    let startx = 200 + i * inBetween;
    let color = wine.hex;
    let id = wine._id;
    let circle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    circle.setAttribute('id', `wine-${i}`);
    circle.setAttribute('class', 'wine-circle');
    circle.setAttribute('cx', startx);
    circle.setAttribute('cy', windowHeight * 0.5);
    circle.setAttribute('r', 15);
    circle.setAttribute('fill', color);
    document.getElementById('dots-svg').appendChild(circle);
  });
}

function toStartAnimation() {
  let windowHeight = getWindowHeightForViz();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.colorPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(`wine-${i}`).style.opacity = '100%';
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(0px, 180px)`;
  });
}

function toColorAnimation() {
  let windowHeight = getWindowHeightForViz();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.colorPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() +
      60}px)`;
  });
}

function toSugarAnimation() {
  let windowHeight = getWindowHeightForViz();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.sugarPosition.cx * 200 + 200;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
      2 +
      180}px)`;
  });
}

function toBoldnessAnimation() {
  let windowHeight = getWindowHeightForViz();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.boldPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
      3 +
      60}px)`;
  });
}

function toFlavorAnimation() {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let flavorX = wine.flavorPosition.cx;
    let flavorY = wine.flavorPosition.cy;
    let transformX = flavorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
      4 +
      flavorY}px)`;
  });
}

function toGlassAnimation() {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let glassX = wine.glassPosition.cx * 160 + 200;
    let glassY = wine.glassPosition.cy;
    let transformX = glassX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
      5 +
      glassY}px)`;
  });
}

function toTemperatureAnimation() {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    let startX = 200 + i * inBetween;
    let tempX = wine.temperaturePosition.cx * 250 + 225;
    let tempY = wine.temperaturePosition.cy;
    let transformX = tempX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
      6 +
      tempY}px)`;
  });
}

function toPairingAnimation() {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach((wine, i) => {
    // Standard syntax
    document.getElementById(
      `wine-${i}`
    ).style.transform = `translate(0px, ${getWindowHeightForViz() * 7 + 20}px)`;
  });
}

function getWindowHeightForViz() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
}

function initPairing() {
  pairingData.forEach(pairing => {
    console.log('hover over ' + pairing.food);
    document.getElementById(`${pairing.food}`).addEventListener(
      ('mouseover',
      function() {
        document
          .getElementsByClassName('wine-circle')
          .forEach(circle => (circle.style.opacity = 0.1));
        pairing.forEach(id => {
          document.getElementById(`wine-${id}`).style.opacity = 1;
        });
      })
    );
  });
}
