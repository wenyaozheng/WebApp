/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i;

text = localStorage.getItem("classListJSON");
obj = JSON.parse(text);
var input = "";
var write = "";
 // input = localStorage.getItem("classcode");
 // dropDown(input);
function dropDown(input) {
    var myNode, option, select = "";
    console.log(input);
    myNode = document.getElementById("selector");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    option = document.createElement("option");
    option.text = "";
    option.value = "";
    select = document.getElementById("selector");
    select.appendChild(option);
    switch(input) {
        case "class_9413A":
            for(i in obj.class_9413A) {
                output = obj.class_9413A[i].LastName + ", " + obj.class_9413A[i].FirstName;
                option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9413A[i].IDNo;
                select = document.getElementById("selector");
                select.appendChild(option);
            }
            break;
        case "class_9413B":
            for(i in obj.class_9413B) {
                output = obj.class_9413B[i].LastName + ", " + obj.class_9413B[i].FirstName;
                option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9413B[i].IDNo;
                select = document.getElementById("selector");
                select.appendChild(option);
            }
            break;
        case "class_9414A":
            for(i in obj.class_9414A) {
                output = obj.class_9414A[i].LastName + ", " + obj.class_9414A[i].FirstName;
               option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9414A[i].IDNo;
                select = document.getElementById("selector");
                select.appendChild(option);
            }
            break;
        case "class_9414B":
            for(i in obj.class_9414B) {
                output = obj.class_9414B[i].LastName + ", " + obj.class_9414B[i].FirstName;
                option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9414B[i].IDNo;
                select = document.getElementById("selector");
                select.appendChild(option);
            }
            break;
        default:
            console.log("error");
    }
}
