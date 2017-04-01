var c = document.getElementById("seatPlan");
var ctx =c.getContext("2d");

ctx.fillStyle = "rgb(51,177,225)";

ctx.beginPath();

for (var x = 10, i = 0; i < 5; x += 25, i++) {
    for (var y = 5, j = 0; j < 5; y += 25, j++) {
        ctx.rect(x, y, 20, 20)
    }
}

for (var x = 167, i = 0; i < 5; x += 25, i++) {
    for (var y = 5, j = 0; j < 5; y += 25, j++) {
        ctx.rect(x, y, 20, 20);
        c.addEventListener("click", doMouseOver, false);

    }
}
ctx.fill();
ctx.closePath();

function doMouseOver(e){
    var r = confirm("Press a button");
    if (r == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    alert(x);
}








