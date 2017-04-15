/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i, counter=0,classcode;
text = localStorage.getItem("classroomListJSON");
obj = JSON.parse(text);
var j = 0;
for(i in obj.Classrooms) {

    output = obj.Classrooms[i].classcode + " " + obj.Classrooms[i].subject+" "+obj.Classrooms[i].schedule;
    if(counter<=4) {
        counter = counter + 1;
    }
    else{
        counter=1;
    }
    // document.write( '<li id="color'+counter+'" onclick="">'+output+'</li>');

    if(i == j){
        var ul = document.getElementById("classList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(output));
        li.setAttribute("id", "color"+counter);
        classcode = obj.Classrooms[i].classcode;
        var att = document.createAttribute("onclick");
        att.value = "temp_classcode('class_" + classcode + "'); " + + "printStudentList('class_" +classcode+"');" + "clearBox(); " + "DefinePaths(event);";
        li.setAttributeNode(att);

        ul.appendChild(li);
        j = j+1;
    }

}