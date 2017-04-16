/**
 * Created by Ling on 4/1/2017.
 */
var set;
text = localStorage.getItem("classlistJSON");
obj = JSON.parse(text);
var cnv = document.getElementById("seatPlan");
var ctx = cnv.getContext("2d");
var deg = Math.PI / 180;
// console.log(obj);
var boxcolor = [];
DefinePaths(null);
function clearBox() {
    boxcolor = [];
}
function DefinePaths(event) {
    var input = localStorage.getItem('classcode');
    var number = 0;
    var test;
    var temp = 41;
    var asd;
    var zxc;
    var qwe;
    var count = 1;

    if(input.match('A')){
        var canvas = document.getElementById('seatPlan');
        canvas.setAttribute('width', '400');
        canvas.setAttribute('height', '200');
        
        for (var y = 5, j = 0; j < 5; y += 35, j++) {
        
            for (var x = 10, i = 0; i < 5; x += 35, i++) {
                console.log("in");
                ctx.beginPath();
                ctx.rect(x, y, 30, 30);
                if (event != null) {
                    if (IsInPath(event)) {
                        set = temp;
        
                        for (asd in obj[input + ""]) {
                            if (obj[input + ""][asd].SeatNo == temp) {
                                document.getElementById("studentName").placeholder = obj[input + ""][asd].LastName + ', ' + obj[input + ""][asd].FirstName;
                                SelStyle2();
                                zxc = 1;
                                // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                                // console.log( obj.class_9413A[asd].SeatNo);
                            }
                        }
                        if (zxc != 1) {
                            SelStyle();
                        }
        
                        zxc = 0;
                    }
                    else {
                        DifStyle();
                    }
                } else {
                    DifStyle();
                }
                if (event != null) {
        
                    for (qwe in obj[input + ""]) {
                        if (obj[input + ""][qwe].SeatNo == "") {
                            if (obj[input + ""][qwe].SeatNo == temp) {
        
                                // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                                // console.log( obj.class_9413A[i].SeatNo);
                                boxcolor.push(temp);
                                console.log(boxcolor);
                            }
                        } else {
                            if (obj[input + ""][qwe].SeatNo == temp) {
                                var index = boxcolor.indexOf(obj[input + ""][qwe].SeatNo);
                                if (index > -1) {
        
                                    boxcolor.splice(index, 1);
                                }
                                boxcolor.push(temp);
                                console.log(boxcolor);
                            }
                        }
                    }
                }
                for (asd in boxcolor) {
                    if (boxcolor[asd] == temp) {
                        SelStyle1();
                    } else {
                        DifStyle();
                    }
                }
        
                ctx.closePath();
                ctx.fill();
                ctx.strokeText("" + temp, x + 6, y + 13);
                ctx.stroke();
                temp = temp + 1;
        
            }
            count = count + 1;
            console.log(count);
            console.log(temp);
            temp = 51 - (5 * count) - (5 * count);
            console.log(temp);
        }
        count = 0;
        temp = 46;
        for (var y = 5, j = 0; j < 5; y += 35, j++) {
            for (var x = 220, i = 0; i < 5; x += 35, i++) {
                number = number + 1;
                ctx.beginPath();
                ctx.rect(x, y, 30, 30);
        
                if (event != null) {
                    if (IsInPath(event)) {
        
                        set = temp;
                        for (asd in obj[input + ""]) {
                            if (obj[input + ""][asd].SeatNo == temp) {
                                document.getElementById("studentName").placeholder = obj[input + ""][asd].LastName + ', ' + obj[input + ""][asd].FirstName;
                                SelStyle2();
                                zxc = 1;
                                // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                                // console.log( obj.class_9413A[asd].SeatNo);
                            }
                        }
                        if (zxc != 1) {
                            SelStyle();
                        }
        
                        zxc = 0;
                    }
                    else
                        DifStyle();
                } else
                    DifStyle();
                if (event != null) {
        
                    for (asd in obj[input + ""]) {
        
                        if (obj[input + ""][asd].SeatNo == "") {
        
                            if (obj[input + ""][asd].SeatNo == temp) {
                                boxcolor.push(temp);
                            }
                        } else {
                            if (obj[input + ""][asd].SeatNo == temp) {
                                var index = boxcolor.indexOf(obj[input + ""][asd].SeatNo);
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
                    } else {
                        DifStyle();
                    }
                }
                ctx.closePath();
                ctx.fill();
                ctx.strokeText(temp + "", x + 6, y + 13);
                ctx.stroke();
                temp = temp + 1;
            }
            count = count + 1;
            console.log(count);
            console.log(temp);
            temp = 46 - (5 * count) - (5 * count);
            console.log(temp);
        }
        var container = document.getElementById('canvasContainer');
        if (container.style.display === 'none') {
            container.style.display = 'block';
        }
    } else  if (input.match('B')){
        count = 0;
        temp = 14;
        var canvas = document.getElementById('seatPlan');
        canvas.setAttribute('width', '400');
        canvas.setAttribute('height', '500');
        for (var x = 120, i = 0; i < 4; x += 35, i++) {
            for (var y = 5, j = 0; j < 14; y += 35, j++) {

                ctx.beginPath();
                ctx.rect(x, y, 30, 30);
                if (event != null) {
                    if (IsInPath(event)) {
                        set = temp;

                        for (asd in obj[input + ""]) {
                            if (obj[input + ""][asd].SeatNo == temp) {
                                document.getElementById("studentName").placeholder = obj[input + ""][asd].LastName + ', ' + obj[input + ""][asd].FirstName;
                                SelStyle2();
                                zxc = 1;
                                // console.log(obj.class_9413A[asd].LastName+ " " + obj.class_9413A[asd].FirstName);
                                // console.log( obj.class_9413A[asd].SeatNo);
                            }
                        }
                        if (zxc != 1) {
                            SelStyle();
                        }
                        zxc = 0;

                    }
                    else {
                        DifStyle();
                    }
                } else {
                    DifStyle();
                }
                if (event != null) {

                    for (qwe in obj[input + ""]) {
                        if (obj[input + ""][qwe].SeatNo == "") {
                            if (obj[input + ""][qwe].SeatNo == temp) {

                                // console.log(obj.class_9413A[i].LastName+ " " + obj.class_9413A[i].FirstName);
                                // console.log( obj.class_9413A[i].SeatNo);
                                boxcolor.push(temp);
                                console.log(boxcolor);
                            }
                        } else {
                            if (obj[input + ""][qwe].SeatNo == temp) {
                                var index = boxcolor.indexOf(obj[input + ""][qwe].SeatNo);
                                if (index > -1) {

                                    boxcolor.splice(index, 1);
                                }
                                boxcolor.push(temp);
                                console.log(boxcolor);
                            }
                        }
                    }
                }
                for (asd in boxcolor) {
                    if (boxcolor[asd] == temp) {
                        SelStyle1();
                    } else {
                        DifStyle();
                    }
                }

                ctx.closePath();
                ctx.fill();
                ctx.strokeText("" + temp, x + 6, y + 13);
                ctx.stroke();
                temp = temp - 1;

            }
            count = count + 1;
            console.log(count);
            temp = 14 + (14 * count);
            console.log(temp);
        }
        var container = document.getElementById('canvasContainer');
        if (container.style.display === 'none') {
            container.style.display = 'block';
        }
    }
}
function IsInPath(event) {
    var bb, x, y;
    bb = cnv.getBoundingClientRect();
    x = (event.clientX - bb.left) * (cnv.width / bb.width);
    y = (event.clientY - bb.top) * (cnv.height / bb.height);

    return ctx.isPointInPath(x, y);
}
function SelStyle() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "cyan";

    modal('box');
}
function SelStyle1() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "cyan";

}
function SelStyle2() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "cyan";

    modal('lateAbsent');
}
function DifStyle() {
    ctx.lineWidth = 2;
    ctx.fillStyle = "gray";
    ctx.strokeStyle = "darkblue";
}
function modal(input) {
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
function closeModal() {
    var modal = document.getElementById('box');
    modal.style.display = "none";
}
function setName(input) {
    // var input = localStorage.getItem('classcode');
    var i;
    var e = document.getElementById("selector");
    var strUser = e.options[e.selectedIndex].value;
    // switch(input) {
    //     case "class_9413A":
    for (i in obj[input + ""]) {
        if (obj[input + ""][i].IDNo == strUser) {
            obj[input + ""][i].SeatNo = set;
            console.log(obj[input + ""][i].LastName + " " + obj[input + ""][i].FirstName);
            console.log(obj[input + ""][i].SeatNo);
            localStorage.removeItem("classListJSON");

            localStorage.setItem("classListJSON", JSON.stringify(obj));
        }
    }
}
function printStudentList(input) {
    var i, ul, li, myNode;
    myNode = document.getElementById("generateList");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    li = document.createElement("li");
    li.text = "";
    var select = document.getElementById("generateList");
    select.appendChild(li);
    console.log(obj[input + ""]);

    for (i in obj[input + ""]) {
        ul = document.getElementById("generateList");
        li = document.createElement("li");
        output = obj[input + ""][i].SeatNo + ' ' + obj[input + ""][i].LastName + ', ' + obj[input + ""][i].FirstName;
        li.appendChild(document.createTextNode(output));
        ul.appendChild(li);
    }
}
function markAbsent() {
    var i, ul, li;
    var input = localStorage.getItem('classcode');
    for (i in obj[input + ""]) {
        if (obj[input + ""][i].SeatNo == set) {
            obj[input + ""][i].Absent.push(document.getElementById("date").value);
            console.log(obj[input + ""][i].FirstName + "absent");
            ul = document.getElementById("absentList");
            li = document.createElement("li");
            output = obj[input + ""][i].SeatNo + ' ' + obj[input + ""][i].LastName + ', ' + obj[input + ""][i].FirstName;
            li.appendChild(document.createTextNode(output));
            ul.appendChild(li);
            localStorage.removeItem("classListJSON");
            localStorage.setItem("classListJSON", JSON.stringify(obj));
        }
    }
}
function markLate() {
    var i, ul, li;
    var input = localStorage.getItem('classcode');
    for (i in obj[input + ""]) {
        if (obj[input + ""][i].SeatNo == set) {
            obj[input + ""][i].Late.push(document.getElementById("date").value);
            console.log(obj[input + ""][i].FirstName + "late");
            ul = document.getElementById("lateList");
            li = document.createElement("li");
            output = obj[input + ""][i].SeatNo + ' ' + obj[input + ""][i].LastName + ', ' + obj[input + ""][i].FirstName;
            li.appendChild(document.createTextNode(output));
            ul.appendChild(li);
            localStorage.removeItem("classListJSON");
            localStorage.setItem("classListJSON", JSON.stringify(obj));
        }
    }
}
function clearStorage() {
    localStorage.removeItem("classroomListJSON");
    localStorage.removeItem("classListJSON");
    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem('classcode');
}
function getData() {
    var classcode;
    var student_Obj = [];
    var i;
    var idno = localStorage.getItem("userLoggedIn");
    var xmlhttp = new XMLHttpRequest();
    var url = "http://mysafeinfo.com/api/data?list=englishmonarchs&format=json";
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json_obj = JSON.parse(this.responseText);
            var classroom_Obj = json_obj.Classrooms;
            for (i in classroom_Obj) {
                classcode = "class_" + classroom_Obj.classcode;
                student_Obj.push(json_obj[classcode]);
            }
            console.log(classroom_Obj);
            console.log(student_Obj);
            localStorage.removeItem("classroomListJSON");
            localStorage.setItem("classroomListJSON", JSON.stringify(classroom_Obj));
            localStorage.removeItem("classListJSON");
            localStorage.setItem("classListJSON", JSON.stringify(student_Obj));
        }
    };
    xmlhttp.send();
}