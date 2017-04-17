/**
 * Created by Ling on 4/14/2017.
 */
function dropDownClass() {
    var i;
    var myNode, option, select = "";
    var obj = JSON.parse(localStorage.getItem("classroomListJSON"));
    console.log(obj.Classrooms);
    myNode = document.getElementById("selector1");
    if (myNode != null) {
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }

        option = document.createElement("option");
        option.text = "";
        option.value = "";
        select = document.getElementById("selector1");
        select.appendChild(option);
    } else
        console.log('ehehehe');
    // switch(input) {
    //     case "class_9413A":
    console.log(obj.Classrooms);
    for (i in obj.Classrooms) {
        output = obj.Classrooms[i].classcode;
        option = document.createElement("option");
        option.text = output;
        option.value = "" + obj.Classrooms[i].classcode;
        select = document.getElementById("selector1");
        select.appendChild(option);
    }
}

function CreateTableFromJSON() {
    var studList=[];
    var list = JSON.parse(localStorage.getItem("classListJSON"));
    list = list["class_"+document.getElementById("selector1").value];
    var count=0;
    for(i in list){
        console.log(document.getElementById("date").value);
        if(list[i].Late.indexOf(document.getElementById("date").value)>-1||list[i].Absent.indexOf(document.getElementById("date").value)>-1){
            studList.push(list[count]);
        }
        count=count+1;
    }

    // EXTRACT VALUE FOR HTML HEADER.

    var col = [];
    for (var i = 0; i < studList.length; i++) {
        for (var key in studList[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute("id","studentTable");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.
    // var row = document.createElement('tr');

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        var att = document.createAttribute("onclick");
        att.value = "sortTable("+i+")";
        th.setAttributeNode(att);
        th.innerHTML = col[i];
        tr.appendChild(th);
        // row.appendChild(th);
        // thead.appendChild(row);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < studList.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = studList[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}



