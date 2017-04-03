/**
 * Created by s326lab on 31/03/2017.
 */
var text, obj, i, counter=0,classcode;
text = localStorage.getItem("classroomListJSON");
obj = JSON.parse(text);
 for(i in obj.Classrooms) {
    output = obj.Classrooms[i].classcode + " " + obj.Classrooms[i].subject+" "+obj.Classrooms[i].schedule;
    if(counter<=4) {
        counter = counter + 1;
    }
    else{
        counter=1;
    }
     document.write( '<li id="color'+counter+'" onclick="">'+output+'</li>');
 }
