/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i;

text = localStorage.getItem("listJSON");
obj = JSON.parse(text);

function dropDown() {
    var input = ""
    input = localStorage.getItem("classcode");
    switch(input) {
        case "class_9413A":
            for(i in obj.class_9413A) {
                output = obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
                document.write( '<option value="'+obj.class_9413A[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9413B":
            for(i in obj.class_9413B) {
                output = obj.class_9413B[i].LastName + " " + obj.class_9413B[i].FirstName;
                document.write( '<option value="'+obj.class_9413B[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414A":
            for(i in obj.class_9414A) {
                output = obj.class_9414A[i].LastName + " " + obj.class_9414A[i].FirstName;
                document.write( '<option value="'+obj.class_9414A[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414B":
            for(i in obj.class_9414B) {
                output = obj.class_9414B[i].LastName + " " + obj.class_9414B[i].FirstName;
                document.write( '<option value="'+obj.class_9414B[i].IDNo+'">'+output+'</option>');
            }
            break;
        default:
            console.log("error");
    }
}