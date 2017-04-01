/**
 * Created by s326lab on 24/03/2017.
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

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i in obj.Users) {
        if (username == obj.Users[i].username && password == obj.Users[i].password) {
            window.location.href = 'pages/home.html';
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