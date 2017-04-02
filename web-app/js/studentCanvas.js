/**
 * Created by Ling on 4/1/2017.
 */
var set;
text = localStorage.getItem("listJSON");
obj = JSON.parse(text);
var cnv = document.getElementById("seatPlan");
var ctx =cnv.getContext("2d");
var deg = Math.PI/180;
DefinePaths(null);

function DefinePaths(event){
var temp=1;
    for (var x = 10, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath();
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event)) {
                    SelStyle();
                    set=temp;
                }
                else
                    DifStyle();
            }else
                DifStyle();
            ctx.closePath();
            ctx.fill();
            ctx.strokeText(""+temp,x+8,y+13);
            ctx.stroke();
            temp=temp+1;
        }
    }

    for (var x = 167, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath();
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event)) {
                    SelStyle();
                }
                else
                    DifStyle();
            }else
                DifStyle();
            // b=i+a+1;
            ctx.closePath();
            ctx.fill();
            ctx.strokeText(temp+"",x+8,y+13);
            ctx.stroke();
            temp=temp+1;
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
    ctx.fillStyle= "cyan";

    var modal = document.getElementById("box");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
function DifStyle(){
    ctx.lineWidth= 2;
    ctx.fillStyle= "gray";
    ctx.strokeStyle= "darkblue";
}
function setName(){
    var i;
    var e = document.getElementById("selector");
    var strUser = e.options[e.selectedIndex].value;
    for(i in obj.class_9413A) {
        if(obj.class_9413A[i].IDNo==strUser){
             obj.class_9413A[i].SeatNo=set+'';
            console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
             console.log( obj.class_9413A[i].SeatNo);
        }
    }
    // return strUser;
}

function printStudentList(){
    var i;
    for(i in obj.class_9413A) {
        output = obj.class_9413A[i].SeatNo + " "+obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
        document.writeln(output);
    }
}




