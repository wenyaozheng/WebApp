/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i;

text = localStorage.getItem("listJSON");
obj = JSON.parse(text);
var input = "";
var write = "";
 // input = localStorage.getItem("classcode");
 // dropDown(input);
function dropDown(input) {
    console.log(input);
    switch(input) {
        case "class_9413A":
            var myNode = document.getElementById("selector");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            var option = document.createElement("option");
            option.text = "";
            option.value = "";
            var select = document.getElementById("selector");
            select.appendChild(option);
            for(i in obj.class_9413A) {
                output = obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
                var option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9413A[i].IDNo;
                var select = document.getElementById("selector");
                select.appendChild(option);
                // document.write( '<option value="'+obj.class_9413A[i].IDNo+'">'+output+'</option>');

            }
            break;
        case "class_9413B":
            var myNode = document.getElementById("selector");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            var option = document.createElement("option");
            option.text = "";
            option.value = "";
            var select = document.getElementById("selector");
            select.appendChild(option);
            for(i in obj.class_9413B) {
                output = obj.class_9413B[i].LastName + " " + obj.class_9413B[i].FirstName;
                var option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9413B[i].IDNo;
                var select = document.getElementById("selector");
                select.appendChild(option);
                // document.write('<option value="'+obj.class_9413B[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414A":
            var myNode = document.getElementById("selector");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            var option = document.createElement("option");
            option.text = "";
            option.value = "";
            var select = document.getElementById("selector");
            select.appendChild(option);
            for(i in obj.class_9414A) {
                output = obj.class_9414A[i].LastName + " " + obj.class_9414A[i].FirstName;
                var option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9414A[i].IDNo;
                var select = document.getElementById("selector");
                select.appendChild(option);
                // document.write('<option value="'+obj.class_9414A[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414B":
            var myNode = document.getElementById("selector");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            var option = document.createElement("option");
            option.text = "";
            option.value = "";
            var select = document.getElementById("selector");
            select.appendChild(option);
            for(i in obj.class_9414B) {
                output = obj.class_9414B[i].LastName + " " + obj.class_9414B[i].FirstName;
                var option = document.createElement("option");
                option.text = output;
                option.value = ""+obj.class_9414B[i].IDNo;
                var select = document.getElementById("selector");
                select.appendChild(option);
                // document.write('<option value="'+obj.class_9414B[i].IDNo+'">'+output+'</option>');
            }
            break;
        default:
            console.log("error");
    }
}
