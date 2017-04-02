/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i, output = ""
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
 for(i in obj.Classrooms) {
    output = obj.Classrooms[i].classcode + " " + obj.Classrooms[i].subject;
     document.write( '<li id="blue">'+output+'</li>');
 }
// console.log(output);
//document.getElementById("blue").innerHTML = output;
