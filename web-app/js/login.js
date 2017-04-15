/**
 * Created by JAY on 3/31/2017.
 */
var text, obj, i, output = "";

//Retrieving data:
text = localStorage.getItem("usersListJSON");
obj = JSON.parse(text);


// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i in obj.Users) {
        if (username == obj.Users[i].username && password == obj.Users[i].password) {
            window.location.href = 'pages/classcode.html';
            // getData();
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

// function getData(){
//     var xmlhttp = new XMLHttpRequest();
//     var url = "Classroom.json";
//     xmlhttp.open("GET", url, true);
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myArr = JSON.parse(this.responseText);
//             console.log(myArr);
//         }
//     };
//
//
//     xmlhttp.send();
// }