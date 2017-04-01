function fModal(click) {
    if (click == "myBtn") {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    } else if (click == "lateBtn") {
        // Get the modal
        var modal = document.getElementById("lateModal");

        // Get the button that opens the modal
        var btn = document.getElementById("lateBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[1];
    } else if (click == "absentBtn") {
        // Get the modal
        var modal = document.getElementById("absentModal");

        // Get the button that opens the modal
        var btn = document.getElementById("absentBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[2];
    }

        // When the user clicks the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
}