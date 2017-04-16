/**
 * Created by Ling on 4/14/2017.
 */

function CreateTableFromJSON() {
    var studList=[];
    var list = JSON.parse(localStorage.getItem("classListJSON")).class_9413A;
    var count=0;
    for(i in list){
        console.log(document.getElementById("date").value);
        if(list[i].Late.indexOf(document.getElementById("date").value)>-1||list[i].Absent.indexOf(document.getElementById("date").value)>-1){
            studList.push(list[count]);
        }
        count=count+1;
    }

    //     [
    //     {
    //         "Book ID": "1",
    //         "Book Name": "Computer Architecture",
    //         "Category": "Computers",
    //         "Price": "125.60"
    //     },
    //     {
    //         "Book ID": "2",
    //         "Book Name": "Asp.Net 4 Blue Book",
    //         "Category": "Programming",
    //         "Price": "56.00"
    //     },
    //     {
    //         "Book ID": "3",
    //         "Book Name": "Popular Science",
    //         "Category": "Science",
    //         "Price": "210.40"
    //     }
    // ];

    // EXTRACT VALUE FOR HTML HEADER.
    // ('Book ID', 'Book Name', 'Category' and 'Price')
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

    // var thead = document.createElement('thead');
    // table.appendChild(thead);

    // var tbody = document.createElement('tbody');
    // table.appendChild(tbody);

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



