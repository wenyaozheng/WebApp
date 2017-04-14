/**
 * Created by Ling on 4/14/2017.
 */

function CreateTableFromJSON() {
    var myBooks = [
        {
            "Book ID": "1",
            "Book Name": "Computer Architecture",
            "Category": "Computers",
            "Price": "125.60"
        },
        {
            "Book ID": "2",
            "Book Name": "Asp.Net 4 Blue Book",
            "Category": "Programming",
            "Price": "56.00"
        },
        {
            "Book ID": "3",
            "Book Name": "Popular Science",
            "Category": "Science",
            "Price": "210.40"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER.
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tbody = document.createElement('tbody');
    tbody.setAttribute("id", "people");
    table.appendChild(tbody);

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        var att = document.createAttribute("onclick");

        switch(i) {
            case 0:
                att.value = "sort_table(people, 0, asc1); asc1 *= -1; asc2 = 1; asc3 = 1; asc4 = 1;";
                break;
            case 1:
                att.value = "sort_table(people, 1, asc2); asc2 *= -1; asc3 = 1; asc4 = 1; asc1 = 1";
                break;
            case 2:
                att.value = "sort_table(people, 2, asc3); asc3 *= -1; asc4 = 1; asc1 = 1; asc2 = 1;";
                break;
            case 3:
                att.value = "sort_table(people, 3, asc4); asc4 *= -1; asc1 = 1; asc2 = 1; asc3 = 1;";
                break;
            default:
                console.log('error')
        }

        th.setAttributeNode(att);
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

