var myObj, myJSON, text, obj, i, output = "";
myObj = {
    "Classrooms":[

        {
            "classcode":"9413A",
            "subject":"Networks Lec",
            "course_no":"IT322"
        },

        {
            "classcode":"9413B",
            "subject":"Networks Lab",
            "course_no":"IT322L"
        },

        {
            "classcode":"9426",
            "subject":"Integrative Programming Lab",
            "course_no":"IT323L"
        }

    ]
};
//save data
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
for(i in obj.Classrooms) {
    output = output+obj.Classrooms[i].classcode + " "+obj.Classrooms[i].subject+" "+obj.Classrooms[i].course_no+"<br>";
}

document.getElementById("demo").innerHTML = output;
//for adding object
// obj['Classroom'].push({"classcode":"9123","subject":"asdasdasd", "course_no":"IT123"});

//modify values
//obj.Classrooms[1].classcode="9012";

//delete values
//delete obj.Classrooms[1].classcode;