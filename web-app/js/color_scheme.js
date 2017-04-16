function colorScheme(input) {
    var blue = "#33b1e1";
    var purple = "#c35ed0";
    var green = "#11b82b";
    var red = "#e54337";

    if (input == "class_9413A") {
        document.getElementById("subject").innerHTML = "Networks Technology with Administration and Maintenance (Lec)";
        document.getElementById("seatPlan").style.borderColor = blue;
        document.getElementById("myBtn").style.backgroundColor = blue;
        document.getElementById("studList-modalHeader").style.backgroundColor = blue;
        document.getElementById("studList-modalFooter").style.backgroundColor = blue;

    } else if (input == "class_9413B") {
        document.getElementById("subject").innerHTML = "Networks Technology with Administration and Maintenance (Lab)";
        document.getElementById("seatPlan").style.borderColor = purple;
        document.getElementById("myBtn").style.backgroundColor = purple;
        document.getElementById("studList-modalHeader").style.backgroundColor = purple;
        document.getElementById("studList-modalFooter").style.backgroundColor = purple;
    } else if (input == "class_9414A") {
        document.getElementById("subject").innerHTML = "Integrative Programming and technologies (Lec)";
        document.getElementById("seatPlan").style.borderColor = green;
        document.getElementById("myBtn").style.backgroundColor = green;
        document.getElementById("studList-modalHeader").style.backgroundColor = green;
        document.getElementById("studList-modalFooter").style.backgroundColor = green;
    } else if (input == "class_9414B") {
        document.getElementById("subject").innerHTML = "Integrative Programming and technologies (Lab)";
        document.getElementById("seatPlan").style.borderColor = red;
        document.getElementById("myBtn").style.backgroundColor = red;
        document.getElementById("studList-modalHeader").style.backgroundColor = red;
        document.getElementById("studList-modalFooter").style.backgroundColor = red;
    }
}

