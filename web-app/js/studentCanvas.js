/**
 * Created by Ling on 4/1/2017.
 */
var set;
text = localStorage.getItem("classlistJSON");
obj = JSON.parse(text);
var cnv = document.getElementById("seatPlan");
var ctx =cnv.getContext("2d");
var deg = Math.PI/180;
// console.log(obj);
var boxcolor=[];
 DefinePaths(null);
function clearBox(){
    boxcolor=[];
}
function DefinePaths(event){
    var input = localStorage.getItem('classcode');
    var temp=1;
    var asd;
    var zxc;
    var qwe;
    for (var x = 10, i = 0; i < 5; x += 25, i++) {
        for (var y = 5, j = 0; j < 5; y += 25, j++) {
            ctx.beginPath();
            ctx.rect(x, y, 20, 20);
            if (event!=null){
                if (IsInPath(event)) {
                    set=temp;

                    for(asd in obj[input+""]) {
                        if(obj[input+""][asd].SeatNo==temp){
                            document.getElementById("studentName").placeholder=obj[input+""][asd].LastName+', '+obj[input+""][asd].FirstName;
                            SelStyle2();
                            zxc=1;
                            // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                            // console.log( obj.class_9413A[asd].SeatNo);
                        }
                    }
                    if(zxc!=1){
                        SelStyle();
                    }

                    zxc=0;
                }
                else {
                    DifStyle();
                }
            }else {
                DifStyle();
            }
            if(event!=null) {

                for (qwe in obj[input+""]) {
                    if(obj[input+""][qwe].SeatNo == "") {
                        if (obj[input+""][qwe].SeatNo == temp) {

                            // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                            // console.log( obj.class_9413A[i].SeatNo);

                            boxcolor.push(temp);
                        }
                    }else{
                        if (obj[input+""][qwe].SeatNo == temp) {
                            var index = boxcolor.indexOf(obj[input+""][qwe].SeatNo);
                            if (index > -1) {

                                 boxcolor.splice(index, 1);
                            }
                             boxcolor.push(temp);
                        }
                    }
                }
            }
            for (asd in boxcolor) {
                if (boxcolor[asd] == temp) {
                    SelStyle1();
                }else{
                    DifStyle();
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
                    for(asd in obj[input+""]) {
                        if(obj[input+""][asd].SeatNo==temp){
                            document.getElementById("studentName").placeholder=obj[input+""][asd].LastName+', '+obj[input+""][asd].FirstName;
                            SelStyle2();
                            zxc=1;
                            // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                            // console.log( obj.class_9413A[asd].SeatNo);
                        }
                    }
                    if(zxc!=1){
                        SelStyle();
                    }

                    zxc=0;
                }
                else
                    DifStyle();
            }else
                DifStyle();
            if(event!=null) {

                for (asd in obj[input+""]) {

                    if(obj[input+""][asd].SeatNo == "") {

                        if (obj[input+""][asd].SeatNo == temp) {

                            // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                            // console.log( obj.class_9413A[i].SeatNo);

                            boxcolor.push(temp);

                        }
                    }else{
                        if (obj[input+""][asd].SeatNo == temp) {
                            var index = boxcolor.indexOf(obj[input+""][asd].SeatNo);
                            if (index > -1) {

                                boxcolor.splice(index, 1);
                            }
                            boxcolor.push(temp);
                        }
                    }
                }
            }
            for (asd in boxcolor) {
                if (boxcolor[asd] == temp) {
                    console.log(boxcolor[asd]);
                    SelStyle1();
                }else{
                    DifStyle();
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.strokeText(temp+"",x+6,y+13);
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
        modal = document.getElementById('lateAbsent');
        span = document.getElementsByClassName("close")[1];
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
function closeModal(){
    var modal = document.getElementById('box');
    modal.style.display = "none";
}
function setName(input){
    // var input = localStorage.getItem('classcode');
    var i;
    var e = document.getElementById("selector");
    var strUser = e.options[e.selectedIndex].value;
    // switch(input) {
    //     case "class_9413A":
            for(i in obj[input+""]) {
                if(obj[input+""][i].IDNo==strUser){
                    obj[input+""][i].SeatNo=set;
                    console.log(obj[input+""][i].LastName+ " " + obj[input+""][i].FirstName);
                    console.log( obj[input+""][i].SeatNo);
                    localStorage.removeItem("classListJSON");

                    localStorage.setItem("classListJSON",JSON.stringify(obj));
                }
            }
    //         break;
    //     case "class_9413B":
    //         for(i in obj.class_9413B) {
    //             if(obj.class_9413B[i].IDNo==strUser){
    //                 obj.class_9413B[i].SeatNo=set;
    //                 console.log(obj.class_9413B[i].LastName+ " " + obj.class_9413B[i].FirstName);
    //                 console.log( obj.class_9413B[i].SeatNo);
    //                 localStorage.removeItem("classListJSON");
    //                 localStorage.setItem("classListJSON",JSON.stringify(obj));
    //             }
    //         }
    //         break;
    //     case "class_9414A":
    //         for(i in obj.class_9414A) {
    //             if(obj.class_9414A[i].IDNo==strUser){
    //                 obj.class_9414A[i].SeatNo=set;
    //                 console.log(obj.class_9414A[i].LastName+ " " + obj.class_9414A[i].FirstName);
    //                 console.log( obj.class_9414A[i].SeatNo);
    //                 localStorage.removeItem("classListJSON");
    //                 localStorage.setItem("classListJSON",JSON.stringify(obj));
    //             }
    //         }
    //         break;
    //     case "class_9414B":
    //         for(i in obj.class_9414B) {
    //             if(obj.class_9414B[i].IDNo==strUser){
    //                 obj.class_9414B[i].SeatNo=set;
    //                 console.log(obj.class_9414B[i].LastName+ " " + obj.class_9414B[i].FirstName);
    //                 console.log( obj.class_9414B[i].SeatNo);
    //                 localStorage.removeItem("classListJSON");
    //                 localStorage.setItem("classListJSON",JSON.stringify(obj));
    //             }
    //         }
    //         break;
    //     default:
    //         console.log("error");
    // }
    closeModal();
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
    console.log(obj[input+""]);
    // switch(input) {
    //     case "class_9413A":
            for (i in obj[input+""]) {
                ul = document.getElementById("generateList");
                li = document.createElement("li");
                output = obj[input+""][i].SeatNo + ' ' + obj[input+""][i].LastName + ', ' + obj[input+""][i].FirstName;
                li.appendChild(document.createTextNode(output));
                ul.appendChild(li);
            }
            // break;
    //     case "class_9413B":
    //         for (i in obj.class_9413B) {
    //             ul = document.getElementById("generateList");
    //             li = document.createElement("li");
    //             output = obj.class_9413B[i].SeatNo + ' ' + obj.class_9413B[i].LastName + ', ' + obj.class_9413B[i].FirstName;
    //             li.appendChild(document.createTextNode(output));
    //             ul.appendChild(li);
    //         }
    //         break;
    //     case "class_9414A":
    //         for (i in obj.class_9414A) {
    //             ul = document.getElementById("generateList");
    //             li = document.createElement("li");
    //             output = obj.class_9414A[i].SeatNo + ' ' + obj.class_9414A[i].LastName + ', ' + obj.class_9414A[i].FirstName;
    //             li.appendChild(document.createTextNode(output));
    //             ul.appendChild(li);
    //         }
    //         break;
    //     case "class_9414B":
    //         for (i in obj.class_9414B) {
    //             ul = document.getElementById("generateList");
    //             li = document.createElement("li");
    //             output = obj.class_9414B[i].SeatNo + ' ' + obj.class_9414B[i].LastName + ', ' + obj.class_9414B[i].FirstName;
    //             li.appendChild(document.createTextNode(output));
    //             ul.appendChild(li);
    //         }
    //         break;
    //     default:
    //         // console.log("error");
    // }
}

function markAbsent() {
    var i,ul,li;
    var input = localStorage.getItem('classcode');
    for(i in obj[input+""]){
        if(obj[input+""][i].SeatNo==set) {
            obj[input+""][i].Absent.push(document.getElementById("date").value);
            console.log(obj[input+""][i].FirstName+"absent");
            ul = document.getElementById("absentList");
            li = document.createElement("li");
            output = obj[input+""][i].SeatNo + ' ' + obj[input+""][i].LastName + ', ' + obj[input+""][i].FirstName;
            li.appendChild(document.createTextNode(output));
            ul.appendChild(li);
            localStorage.removeItem("classListJSON");
            localStorage.setItem("classListJSON",JSON.stringify(obj));
        }
    }

}

function markLate() {
    var i,ul,li;
    var input = localStorage.getItem('classcode');
    for(i in obj[input+""]){
        if(obj[input+""][i].SeatNo==set) {
            obj[input+""][i].Late.push(document.getElementById("date").value);
            console.log(obj[input+""][i].FirstName+"late");
            ul = document.getElementById("lateList");
            li = document.createElement("li");
            output = obj[input+""][i].SeatNo + ' ' + obj[input+""][i].LastName + ', ' + obj[input+""][i].FirstName;
            li.appendChild(document.createTextNode(output));
            ul.appendChild(li);
            localStorage.removeItem("classListJSON");
            localStorage.setItem("classListJSON",JSON.stringify(obj));
        }
    }

}






