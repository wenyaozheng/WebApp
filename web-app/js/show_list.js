function CreateTableFromJSON(data) {
    var blue = "#33b1e1";
    var purple = "#c35ed0";
    var green = "#11b82b";
    var red = "#e54337";

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
           },
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
            },
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
            },
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
            },
            {
                "ID No.": "2150001",
                "Last Name": "Zheng",
                "First Name": "Anne"
            },
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
            },
            {
                "ID No.": "2150001",
                "Last Name": "Zheng",
                "First Name": "Anne"
            },
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
            },
            {
                "ID No.": "2150001",
                "Last Name": "Zheng",
                "First Name": "Anne"
            },
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
        document.getElementById("subject").innerHTML = "Networks Technology with Administration and Maintenance (Lec)";
        document.getElementById("seatPlan").style.borderColor = blue;
        document.getElementById("myBtn").style.backgroundColor = blue;
        document.getElementById("studList-modalHeader").style.backgroundColor = blue;
        document.getElementById("studList-modalFooter").style.backgroundColor = blue;
    } else if (data == "class_9413B") {
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
        document.getElementById("subject").innerHTML = "Networks Technology with Administration and Maintenance (Lab)";
        document.getElementById("seatPlan").style.borderColor = purple;
        document.getElementById("myBtn").style.backgroundColor = purple;
        document.getElementById("studList-modalHeader").style.backgroundColor = purple;
        document.getElementById("studList-modalFooter").style.backgroundColor = purple;
    } else if (data == "class_9414A") {
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
        document.getElementById("subject").innerHTML = "Integrative Programming and technologies (Lec)";
        document.getElementById("seatPlan").style.borderColor = green;
        document.getElementById("myBtn").style.backgroundColor = green;
        document.getElementById("studList-modalHeader").style.backgroundColor = green;
        document.getElementById("studList-modalFooter").style.backgroundColor = green;
    } else if (data == "class_9414B") {
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
        document.getElementById("subject").innerHTML = "Integrative Programming and technologies (Lab)";
        document.getElementById("seatPlan").style.borderColor = red;
        document.getElementById("myBtn").style.backgroundColor = red;
        document.getElementById("studList-modalHeader").style.backgroundColor = red;
        document.getElementById("studList-modalFooter").style.backgroundColor = red;
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