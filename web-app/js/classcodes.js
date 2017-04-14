/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i, counter=0,classcode;
text = localStorage.getItem("classroomListJSON");
obj = JSON.parse(text);
for(i in obj.Classrooms) {
    output = obj.Classrooms[i].classcode + " " + obj.Classrooms[i].subject+" "+obj.Classrooms[i].schedule;
    classcode = obj.Classrooms[i].classcode;
    if(counter<=4) {
        counter = counter + 1;
    }
    else{
        counter=1;
    }
    document.write( '<li id="color'+counter+'" onclick="">'+output+'</li>');

    var ul = document.getElementById("classList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(output));
    li.setAttribute("id", "color"+counter);

    var att = document.createAttribute("onclick");
    att.value = temp_classcode(classcode);
    li.setAttributeNode(att);

    ul.appendChild(li);
}