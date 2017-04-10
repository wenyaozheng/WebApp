/**
 * Created by Ling on 4/1/2017.
 */
var set;
text = localStorage.getItem("classListJSON");
obj = JSON.parse(text);
var cnv = document.getElementById("seatPlan");
var ctx =cnv.getContext("2d");
var deg = Math.PI/180;
// console.log(obj);
// DefinePaths(null);
var boxcolor=[];
function DefinePaths(event){

    var temp=1;
    var asd;
    for (var x = 10, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath();
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event)) {
                    set=temp;
                    for(asd in obj.class_9413A) {
                        if(obj.class_9413A[asd].SeatNo==temp){
                            SelStyle2();
                            // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                            // console.log( obj.class_9413A[asd].SeatNo);
                        }
                        else{
                            SelStyle();
                        }
                    }
                }
                else {
                    DifStyle();
                }
            }else {
                DifStyle();
            }
            for(asd in obj.class_9413A) {
                if(obj.class_9413A[asd].SeatNo==temp){
                    // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                    // console.log( obj.class_9413A[i].SeatNo);
                    boxcolor.push(temp);
                }
            }
            for(asd in boxcolor){
                if(boxcolor[asd]==temp){
                    console.log(boxcolor[asd]);
                    SelStyle1();
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.strokeText(""+temp,x+6,y+13);
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
                    set=temp;
                    for(asd in obj.class_9413A) {
                        if(obj.class_9413A[i].SeatNo==temp){
                            SelStyle2();
                        }
                        else{
                            SelStyle();
                        }
                    }
                }
                else
                    DifStyle();
            }else
                DifStyle();
            for(asd in obj.class_9413A) {
                if(obj.class_9413A[asd].SeatNo==temp){
                    // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                    // console.log( obj.class_9413A[i].SeatNo);
                    boxcolor.push(temp);
                }
            }
            for(asd in boxcolor){
                if(boxcolor[asd]==temp){
                    console.log(boxcolor[asd]);
                    SelStyle1();
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.strokeText(temp+"",x+6,y+13);
            ctx.stroke();
            temp=temp+1;
        }
    }
    // seatPlan_lab
    // var temp=1;
    // var asd;
    // var column, row;
    // for (var x = 5, i = 0; i < column; x += 25, i++) {
    //     for (var y = 5, j = 0; j < row; y += 25, j++) {
    //         ctx.beginPath();
    //         ctx.rect(x, y, 20, 20);
    //         if (event!=null){
    //             if (IsInPath(event)) {
    //                 set=temp;
    //                 for(asd in obj.class_9413A) {
    //                     if(obj.class_9413A[i].SeatNo==temp){
    //                         SelStyle2();
    //                     }
    //                     else{
    //                         SelStyle();
    //                     }
    //                 }
    //             }
    //             else
    //                 DifStyle();
    //         }else
    //             DifStyle();
    //         for(asd in obj.class_9413A) {
    //             if(obj.class_9413A[asd].SeatNo==temp){
    //                 // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
    //                 // console.log( obj.class_9413A[i].SeatNo);
    //                 boxcolor.push(temp);
    //             }
    //         }
    //         for(asd in boxcolor){
    //             if(boxcolor[asd]==temp){
    //                 console.log(boxcolor[asd]);
    //                 SelStyle1();
    //             }
    //         }
    //         ctx.closePath();
    //         ctx.fill();
    //         ctx.strokeText(temp+"",x+6,y+13);
    //         ctx.stroke();
    //         temp=temp+1;
    //     }
    // }
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

    modal('box');
}
function SelStyle1(){
    ctx.lineWidth= 2;
    ctx.strokeStyle= "brown";
    ctx.fillStyle= "cyan";

}
function SelStyle2(){
    ctx.lineWidth= 2;
    ctx.strokeStyle= "brown";
    ctx.fillStyle= "cyan";

    modal('lateAbsent');
}
function DifStyle(){
    ctx.lineWidth= 2;
    ctx.fillStyle= "gray";
    ctx.strokeStyle= "darkblue";
}
function  modal(input) {
    if (input == "box") {
        var modal = document.getElementById('box');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        };
    } else if (input == "lateAbsent") {
        var modal = document.getElementById('lateAbsent');
        var span = document.getElementsByClassName("close")[1];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        };
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
function setName(){
    var input = localStorage.getItem('classcode');
    var i;
    var e = document.getElementById("selector");
    var strUser = e.options[e.selectedIndex].value;
    switch(input) {
        case "class_9413A":
            for(i in obj.class_9413A) {
                if(obj.class_9413A[i].IDNo==strUser){
                    obj.class_9413A[i].SeatNo=set;
                    console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                    console.log( obj.class_9413A[i].SeatNo);
                    localStorage.removeItem("classListJSON");

                    localStorage.setItem("classListJSON",JSON.stringify(obj));
                }
            }
            break;
        case "class_9413B":
            for(i in obj.class_9413B) {
                if(obj.class_9413B[i].IDNo==strUser){
                    obj.class_9413B[i].SeatNo=set;
                    console.log(obj.class_9413B[i].LastName+ " " + obj.class_9413B[i].FirstName);
                    console.log( obj.class_9413B[i].SeatNo);
                    localStorage.removeItem("classListJSON");
                    localStorage.setItem("classListJSON",JSON.stringify(obj));
                }
            }
            break;
        case "class_9414A":
            for(i in obj.class_9414A) {
                if(obj.class_9414A[i].IDNo==strUser){
                    obj.class_9414A[i].SeatNo=set;
                    console.log(obj.class_9414A[i].LastName+ " " + obj.class_9414A[i].FirstName);
                    console.log( obj.class_9414A[i].SeatNo);
                    localStorage.removeItem("classListJSON");
                    localStorage.setItem("classListJSON",JSON.stringify(obj));
                }
            }
            break;
        case "class_9414B":
            for(i in obj.class_9414B) {
                if(obj.class_9414B[i].IDNo==strUser){
                    obj.class_9414B[i].SeatNo=set;
                    console.log(obj.class_9414B[i].LastName+ " " + obj.class_9414B[i].FirstName);
                    console.log( obj.class_9414B[i].SeatNo);
                    localStorage.removeItem("classListJSON");
                    localStorage.setItem("classListJSON",JSON.stringify(obj));
                }
            }
            break;
        default:
            console.log("error");
    }
}
function printStudentList(input){
    // console.log(input);
    var i, ul, li, myNode;
    myNode = document.getElementById("generateList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    li = document.createElement("li");
    li.text = "";
    var select = document.getElementById("generateList");
    select.appendChild(li);
    switch(input) {
        case "class_9413A":
            for (i in obj.class_9413A) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9413A[i].SeatNo + ' ' + obj.class_9413A[i].LastName + ', ' + obj.class_9413A[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9413B":
            for (i in obj.class_9413B) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9413B[i].SeatNo + ' ' + obj.class_9413B[i].LastName + ', ' + obj.class_9413B[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9414A":
            for (i in obj.class_9414A) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9414A[i].SeatNo + ' ' + obj.class_9414A[i].LastName + ', ' + obj.class_9414A[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9414B":
            for (i in obj.class_9414B) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9414B[i].SeatNo + ' ' + obj.class_9414B[i].LastName + ', ' + obj.class_9414B[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        default:
            // console.log("error");
    }
}
function printStudentList(input){
    // console.log(input);
    var i, ul, li, myNode;
    myNode = document.getElementById("generateList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    li = document.createElement("li");
    li.text = "";
    var select = document.getElementById("generateList");
    select.appendChild(li);
    switch(input) {
        case "class_9413A":
            for (i in obj.class_9413A) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9413A[i].SeatNo + ' ' + obj.class_9413A[i].LastName + ', ' + obj.class_9413A[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9413B":
            for (i in obj.class_9413B) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9413B[i].SeatNo + ' ' + obj.class_9413B[i].LastName + ', ' + obj.class_9413B[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9414A":
            for (i in obj.class_9414A) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9414A[i].SeatNo + ' ' + obj.class_9414A[i].LastName + ', ' + obj.class_9414A[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        case "class_9414B":
            for (i in obj.class_9414B) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj.class_9414B[i].SeatNo + ' ' + obj.class_9414B[i].LastName + ', ' + obj.class_9414B[i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            break;
        default:
        // console.log("error");
    }
}






