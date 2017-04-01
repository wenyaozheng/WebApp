/**
 * Created by JAY on 3/31/2017.
 */
var rects = [];
  function createTable(row,col) {
    // var row=2;
    // var col=2;
    var c = document.getElementById("myCanvas");

    var ctx = c.getContext("2d");
    var tileWidth  = c.width / col;


     var tileHeight = c.height / row;
     var x, y,xindex=0,yindex=0;
     while(xindex<col) {
         x = xindex * tileWidth;
         while(yindex<row) {
             y = yindex * tileHeight;
             ctx.beginPath();
             ctx.lineWidth = "1";
             ctx.strokeStyle = "#000000";
             ctx.rect(x, y, tileWidth, tileHeight);
             ctx.stroke();
             rects.push([x,y,tileWidth,tileHeight]);
             yindex=yindex+1;
         }
         yindex=0;
         xindex=xindex+1;
     }
  }

  function clearTable(){
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
  }

var ctx = $('#myCanvas').get(0).getContext('2d');


for(var i=0;i<rects.length;i++) {
    ctx.fillRect(rects[i][0],
        rects[i][1],
        rects[i][2],
        rects[i][3]);
}

$('#myCanvas').click(function(e) {
    var x = e.offsetX,
        y = e.offsetY;

    for(var i=0;i<rects.length;i++) {
        if(x > rects[i][0] && x < rects[i][0] + rects[i][2] && y > rects[i][1] && y < rects[i][1] + rects[i][3]) {
            window.open("../index.html",'','width=700,height=500,resizable=false,left=0,top=0');return false;
                // alert('Rectangle ' + i + ' clicked');
        }
    }
});


  //   var colValue = document.getElementById("columns").value;
  //   var rowValue = document.getElementById("rows").value;
  // createTable(rowValue,colValue);

