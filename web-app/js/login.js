/**
 * Created by JAY on 3/31/2017.
 */
var myObj, myJSON, text, obj, i, output = "";
myObj = {
    "Users":[

        {
            "username":"user1",
            "password":"1",
            "name":"user1"
        },

        {
            "username":"user2",
            "password":"2",
            "name":"user2"
        },

        {
            "username":"user3",
            "password":"3",
            "name":"user3"
        }

    ]
};
//save data
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);

// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i in obj.Users) {
        if (username == obj.Users[i].username && password == obj.Users[i].password) {
            window.location.href = 'pages/home.html';
            initData();
            alert("Login successfully");
            // Redirecting to other page.
            return false;
        }
        else {
            // attempt --;// Decrementing by one.

            // Disabling fields after 3 attempts.
            //         if( attempt == 0){
            //             document.getElementById("username").disabled = true;
            //             document.getElementById("password").disabled = true;
            //             document.getElementById("submit").disabled = true;
            //             return false;
            //         }
        }
    }
    alert("Invalid username or password;");
    return false;
}

function initData() {
    var student_Obj, student_JSON;
    student_Obj = {
        "class_9413A": [
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne"
                ,"SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            },
            {
                "IDNo": "2150428",
                "LastName": "Fama",
                "FirstName": "Charlene",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "Garcia",
                "FirstName": "Jay",
                "SeatNo": ""
            },
            {
                "IDNo": "2150001",
                "LastName": "Zheng",
                "FirstName": "Anne",
                "SeatNo": ""
            }
        ]
    };
    student_JSON = JSON.stringify(student_Obj);
    localStorage.setItem("listJSON", student_JSON);

    var myObj, myJSON;
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
                "course_no":"IT323L",
                "schedule":"9:00-10:30 MTH"
            }
        ]
    };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}