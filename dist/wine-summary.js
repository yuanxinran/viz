

// wineData.forEach((wine, i) => {
//     let startX = 200 + i * inBetween;
//     let summaryX = wine.summaryPosition.cx;// * 160 + 200;
//     let summaryY = wine.summaryPosition.cy;
//     let transformX = summaryX - startX;
//     let id = wine._id;

//     // Standard syntax
//     document.getElementById(
//       `wine-${i}`
//     ).style.transform = `translate(${transformX}px, ${getWindowHeightForViz() *
//       9 +
//       summaryY}px)`;
//   });

console.log("create wine summary!");

  function addTable() {
    var myTableDiv = document.getElementById("wine-summary-table");
  
    var table = document.createElement('TABLE');
    // table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  

    for (var i = 0; i < wineData.length; i++) {
        let wine = wineData[i];
    // wineData.forEach((wine, i) => {

        if (i % 3 == 0) {
            var tr = document.createElement('TR');
            tr.setAttribute("class", "wine-table-row");
            tableBody.appendChild(tr);
        }
        // console.log(i, wine.variety);
        // console.log(wine.hex);
        // console.log(wine.summaryPosition.cx, wine.summaryPosition.cy);
        // console.log(wine.description);

        // console.log(wine.hex);
        let name = wine.variety,
            cx = wine.summaryPosition.cx, 
            cy = wine.summaryPosition.cy,
            description = wine.description;

        var td = document.createElement('TD');
        td.setAttribute("class", "wine-subtable");
        // td.appendChild(document.createTextNode(name));

            var wine_table = document.createElement('TABLE');
            // wine_table.border = '1';
            var wine_tableBody = document.createElement('TBODY');
            wine_table.appendChild(wine_tableBody);

            // for (var row = 0; row < 2; row++) {
                var wine_tr1 = document.createElement('TR');
                wine_tableBody.appendChild(wine_tr1);

                // for (var col = 0; col < 2; col++) {
                    // console.log(i, name, row, col);
                    var winedot_td = document.createElement('TD');
                    winedot_td.appendChild(document.createTextNode(""));
                    winedot_td.setAttribute("class", "wine-subtable-col1");
                    wine_tr1.appendChild(winedot_td);

                    var winename_td = document.createElement('TD');
                    winename_td.appendChild(document.createTextNode(name));
                    winename_td.setAttribute("class", "wine-table-name");
                    wine_tr1.appendChild(winename_td);

                var wine_tr2 = document.createElement('TR');
                wine_tableBody.appendChild(wine_tr2);
                    var winedot_td = document.createElement('TD');
                    winedot_td.appendChild(document.createTextNode(""));
                    winedot_td.setAttribute("class", "wine-subtable-col1");
                    wine_tr2.appendChild(winedot_td);

                    var winename_td = document.createElement('TD');
                    winename_td.appendChild(document.createTextNode(description));
                    wine_tr2.appendChild(winename_td);
                // } 
            // }
            // for (var row = 0; row < 2; row++) {
            //     var wine_tr = document.createElement('TR');
            //     wine_tableBody.appendChild(wine_tr);

            //     for (var col = 0; col < 2; col++) {
            //         console.log(i, name, row, col);
            //         var wine_td = document.createElement('TD');
            //         wine_td.appendChild(document.createTextNode(name));
            //         wine_tr.appendChild(wine_td);
            //     } 
            // }

            td.appendChild(wine_table);

        tr.appendChild(td);

    }
    myTableDiv.appendChild(table);
  }
  addTable();

//   var table = document.createElement('TABLE');
//   table.border = '1';

//   var tableBody = document.createElement('TBODY');
//   table.appendChild(tableBody);

//   for (var i = 0; i < 3; i++) {
//     var tr = document.createElement('TR');
//     tableBody.appendChild(tr);

//     for (var j = 0; j < 4; j++) {
//       var td = document.createElement('TD');
//       td.width = '75';
//       td.appendChild(document.createTextNode("Cell " + i + "," + j));
//       tr.appendChild(td);
//     }
//   }
//   myTableDiv.appendChild(table);