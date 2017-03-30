function CreateTableFromJSON(data) {
    if(data == "class_9413A") {
        var studList = [
           {
               "ID No.": "2150428",
               "Last Name": "Fama",
               "First Name": "Charlene"
           },
           {
               "ID No.": "2150000",
               "Last Name": "Garcia",
               "First Name": "Jay"
           },
           {
               "ID No.": "2150001",
               "Last Name": "Zheng",
               "First Name": "Anne"
           }
        ];
        document.getElementById("aside").style.backgroundColor = "#33b1e1";
    } else if (data == "class_9415B") {
        var studList = [
            {
                "ID No.": "SAMPLE",
                "Last Name": "...",
                "First Name": "..."
            },
            {
                "ID No.": "2150000",
                "Last Name": "...",
                "First Name": "..."
            },
            {
                "ID No.": "...",
                "Last Name": "...",
                "First Name": "..."
            }
        ];
        document.getElementById("aside").style.backgroundColor = "#c35ed0";
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

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
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
    var divContainer = document.getElementById("showStudentList");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}