var rects = [];
var c = document.getElementById("seatPlan");
var ctx =c.getContext("2d");

ctx.fillStyle = "rgb(51,177,225)";

ctx.beginPath();

for (var x = 10, i = 0; i < 5; x += 25, i++) {
    for (var y = 5, j = 0; j < 5; y += 25, j++) {
        ctx.rect(x, y, 20, 20);
        rects.push([x,y,20,20]);
    }
}

for (var x = 167, i = 0; i < 5; x += 25, i++) {
    for (var y = 5, j = 0; j < 5; y += 25, j++) {
        ctx.rect(x, y, 20, 20);
        rects.push([x,y,20,20]);

    }
}
c.addEventListener("click", doMouseOver, false);
// c.addEventListener("click", getClickPosition, false);
// for(var i=0;i<rects.length;i++) {
//     ctx.fillRect(rects[i][0],
//         rects[i][1],
//         rects[i][2],
//         rects[i][3]);
// }

ctx.fill();
ctx.closePath();

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
            var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

            xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
            yPosition += (el.offsetTop - yScrollPos + el.clientTop);
        } else {
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}

function doMouseOver(e){
    // var r = confirm("Press a button");
    // if (r == true) {
    //     x = "You pressed OK!";
    // } else {
    //     x = "You pressed Cancel!";
    // }
    // alert(x);
    var x = e.clientX,
        y = e.clientY;
     console.log(x);
     console.log(y);

    for (var i = 0; i < rects.length; i++) {
        var asd = getPosition(document.getElementById("seatPlan"));
        if (x > rects[i][0]+asd.x && x < rects[i][0]+asd.x + rects[i][2] && y > rects[i][1]+asd.y && y < rects[i][1]+asd.y + rects[i][3]) {
            console.log(rects[i][0]+asd.x);
            console.log(rects[i][1]+asd.y);
            // window.open("../index.html", '', 'width=700,height=500,resizable=false,left=0,top=0');
            alert('Rectangle ' + i + ' clicked');
            return false;

        }
    }
}




// function getClickPosition(e) {
//     // var xPosition = e.clientX;
//     // var yPosition = e.clientY;
// // }
// // $('#myCanvas').click(function(e) {
//
//     var x = e.clientX,
//         y = e.clientY;
//     for (var i = 0; i < rects.length; i++) {
//        var asd = getPosition(document.getElementById("seatPlan"));
//         if (x > rects[i][0]+asd.x && x < rects[i][0]+asd.x + rects[i][2] && y > rects[i][1]+asd.y && y < rects[i][1]+asd.y + rects[i][3]) {
//             alert('Rectangle ' + i + ' clicked');
//             // window.open("../index.html", '', 'width=700,height=500,resizable=false,left=0,top=0');
//             return false;
//
//         }
//     }
// }









