/**
 * Created by s326lab on 31/03/2017.
 */
var myObj, myJSON, text, obj, i, output = "";
myObj = {
            "Classrooms":[

            {
                "classcode":"9413A",
                "subject":"Networks Lec",
                "course_no":"IT322",
                "schedule":"10:30-11:30 TF"
            },

            {
                "classcode":"9413B",
                "subject":"Networks Lab",
                "course_no":"IT322L",
                "schedule":"9:00-12:00 W"
            },

            {
                "classcode":"9426",
                "subject":"Integrative Programming Lab",
                "course_no":"IT323L"
            }
            ]
        };
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
 for(i in obj.Classrooms) {
    output = obj.Classrooms[i].classcode + " " + obj.Classrooms[i].subject;
     document.write( '<li id="blue">'+output+'</li>');
 }
// console.log(output);
//document.getElementById("blue").innerHTML = output;
