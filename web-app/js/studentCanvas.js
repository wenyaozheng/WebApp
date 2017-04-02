var cnv = document.getElementById("seatPlan");
var ctx =cnv.getContext("2d");
var deg = Math.PI/180;
DefinePaths(null);

function DefinePaths(event){

    for (var x = 10, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath();
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event))
                    SelStyle();
                else
                    DifStyle();
            }else
                DifStyle();
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    for (var x = 167, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath()
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event))
                    SelStyle();
                else
                    DifStyle();
            }else
                DifStyle();
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
}

function IsInPath(event) {
    var bb, x, y;
    bb = cnv.getBoundingClientRect();
    x = (event.clientX-bb.left) * (cnv.width/bb.width);
    y = (event.clientY-bb.top) * (cnv.height/bb.height);
    return ctx.isPointInPath(x,y);
}

function SelStyle(){
    ctx.lineWidth= 2;
    ctx.strokeStyle= "brown";
    ctx.fillStyle= "cyan"
}
function DifStyle(){
    ctx.lineWidth= 2;
    ctx.fillStyle= "gray";
    ctx.strokeStyle= "darkblue";
}






