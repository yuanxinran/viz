document.getElementById ('dots-svg').addEventListener ('load', adjustSVGSize);

const controller = new ScrollMagic.Controller ();

function adjustSVGSize () {
  let height = document.getElementById ('viz').offsetHeight;

  document.getElementById ('dots-svg').style.height = height;
}
window.onresize = adjustSVGSize;

$ (document).ready (function () {
  drawInitialDots ();
  const sceneIntro = new ScrollMagic.Scene ({
    triggerElement: '#viz-intro',
    triggerHook: 0.8,
    duration: '100%',
  })
    .on ('enter', function () {
      toStartAnimation ();
    })
    .addTo (controller);

  const sceneIntro2 = new ScrollMagic.Scene ({
    triggerElement: '#viz-intro',
    triggerHook: 0.15,
    duration: '100%',
  })
    .on ('enter', function () {
      toStartAnimation2 ();
    })
    .addTo (controller);

  const sceneColor = new ScrollMagic.Scene ({
    triggerElement: '#viz-color',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toColorAnimation ();
    })
    .addTo (controller);

  const sceneSugar = new ScrollMagic.Scene ({
    triggerElement: '#viz-sugar',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toSugarAnimation ();
    })
    .addTo (controller);

  const sceneBoldness = new ScrollMagic.Scene ({
    triggerElement: '#viz-boldness',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toBoldnessAnimation ();
    })
    .addTo (controller);

  const sceneFlavor = new ScrollMagic.Scene ({
    triggerElement: '#viz-flavor',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toFlavorAnimation ();
    })
    .addTo (controller);

  const sceneGlass = new ScrollMagic.Scene ({
    triggerElement: '#viz-glass',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toGlassAnimation ();
    })
    .addTo (controller);

  const sceneTemperature = new ScrollMagic.Scene ({
    triggerElement: '#viz-temperature',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toTemperatureAnimation ();
    })
    .addTo (controller);

  const scenePairing = new ScrollMagic.Scene ({
    triggerElement: '#viz-pairing',
    triggerHook: 'onCenter',
    duration: '100%',
  })
    .on ('enter', function () {
      toPairingAnimation ();
    })
    .addTo (controller);

  pairingData.forEach (pairing => {
    $ (`#${pairing.food}`).hover (
      function () {
        var circles = document.getElementsByClassName ('wine-circle');
        console.log ('in!!!');

        var i;
        for (i = 0; i < circles.length; i++) {
          circles[i].style.opacity = 0;
        }

        pairing.wine.forEach (id => {
          document.getElementById (`wine-${id}`).style.opacity = 1;

          $ (`#wine-${id}`).tooltipster ('open');
        });
      },
      function () {
        var circles = document.getElementsByClassName ('wine-circle');

        var i;
        for (i = 0; i < circles.length; i++) {
          circles[i].style.opacity = 1;
          $ (`#wine-${i}`).tooltipster ('close');
        }
      }
    );

    // document
    //   .getElementById (`${pairing.food}`)
    //   .addEventListener ('click', highlightDots (pairing), false);
    // document
    //   .getElementById (`${pairing.food}`)
    //   .addEventListener ('onmouseout', unhighlightDots ());
  });
});

function drawInitialDots () {
  let inBetween = (1000 - 200) / 11;
  let windowHeight = getWindowHeightForViz ();

  wineData.forEach ((wine, i) => {
    let startx = 200 + i * inBetween;
    let color = wine.hex;
    let id = wine._id;
    let circle = document.createElementNS (
      'http://www.w3.org/2000/svg',
      'circle'
    );

    circle.setAttribute ('id', `wine-${i}`);
    circle.setAttribute ('class', 'wine-circle tooltip');
    circle.setAttribute ('cx', startx);
    circle.setAttribute ('cy', 0);
    circle.setAttribute ('r', 15);
    circle.setAttribute ('fill', color);
    circle.setAttribute ('title', wine.variety);
    document.getElementById ('dots-svg').appendChild (circle);
  });
}

function toStartAnimation () {
  let windowHeight = getWindowHeightForViz ();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.colorPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(0px, ${getWindowHeightForViz () * 0.5 + 180}px)`;
  });
}

function toStartAnimation2 () {
  wineData.forEach ((wine, i) => {
    // Standard syntax
    document.getElementById (`wine-${i}`).style.opacity = '100%';
  });
}

function toColorAnimation () {
  let windowHeight = getWindowHeightForViz ();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.colorPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 1.5 + 60}px)`;
  });
}

function toSugarAnimation () {
  let windowHeight = getWindowHeightForViz ();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.sugarPosition.cx * 200 + 200;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 2.5 + 180}px)`;
  });
}

function toBoldnessAnimation () {
  let windowHeight = getWindowHeightForViz ();
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let colorX = wine.boldPosition.cx * 1000 + 100;
    let transformX = colorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 3.5 + 70}px)`;
  });
}

function toFlavorAnimation () {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let flavorX = wine.flavorPosition.cx;
    let flavorY = wine.flavorPosition.cy;
    let transformX = flavorX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 4.5 + flavorY}px)`;
  });
}

function toGlassAnimation () {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let glassX = wine.glassPosition.cx * 160 + 200;
    let glassY = wine.glassPosition.cy;
    let transformX = glassX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 5.5 + glassY}px)`;
  });
}

function toTemperatureAnimation () {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    let startX = 200 + i * inBetween;
    let tempX = wine.temperaturePosition.cx * 250 + 225;
    let tempY = wine.temperaturePosition.cy;
    let transformX = tempX - startX;
    let id = wine._id;

    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz () * 6.5 + tempY}px)`;
  });
}

function toPairingAnimation () {
  let inBetween = (1000 - 200) / 11;
  wineData.forEach ((wine, i) => {
    // Standard syntax
    document.getElementById (
      `wine-${i}`
    ).style.transform = `translate(0px, ${getWindowHeightForViz () * 7.6}px)`;
  });
}

function getWindowHeightForViz () {
  console.log (window.innerHeight);
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  );
}

// function highlightDots (pairing) {
//   var circles = document.getElementsByClassName ('wine-circle');
//   console.log ('in!!!');

//   var i;
//   for (i = 0; i < circles.length; i++) {
//     circles[i].style.opacity = 0;
//   }

//   pairing.wine.forEach (id => {
//     document.getElementById (`wine-${id}`).style.opacity = 1;
//   });
// }

// function unhighlightDots () {
//   console.log ('unhover');
//   var circles = document.getElementsByClassName ('wine-circle');

//   var i;
//   for (i = 0; i < circles.length; i++) {
//     circles[i].style.opacity = 1;
//   }
// }
