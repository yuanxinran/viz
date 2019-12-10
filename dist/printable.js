console.log("PRINT");
function printDiv(divName) {
    console.log("in print div");
    //  var printContents = document.getElementsByClassName(divName).innerHTML;
    var printContents = document.getElementById(divName).innerHTML;
     console.log(printContents);
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}