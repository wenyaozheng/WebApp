var i;
text = localStorage.getItem("listJSON");
obj = JSON.parse(text);
for(i in obj.class_9413A) {
    output = obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
    document.write( '<option value="'+obj.class_9413A[i].IDNo+'">'+output+'</option>');
}

// create data object to contain form data
function AddressBookEntry(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
}

function go(){
    // create data structure
    var addressBook = {entries:[]};  // this should be JSON array object

    // create onclick function for button
    document.getElementById("submit").onclick = function() {
        // get values from each form field
        var name = document.getElementById("username").value;
        var address = document.getElementById("useraddress").value;
        var email = document.getElementById("useremail").value;

        // create new object using consturctor
        var newAddress = new AddressBookEntry(name, address, email);
        //var jAddress = JSON.stringify(newAddress);

        // push new object into array
        addressBook.entries.push(newAddress);
        localStorage.setItem("addressBook", JSON.stringify(addressBook));

        // add information to page

        // write data to the page
        console.log(addressBook);
        // store the data

        // read from storage and write to page if data found

        return true;
    }
}
