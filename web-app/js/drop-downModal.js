/**
 * Created by s326lab on 31/03/2017.
 */
var student_Obj, student_JSON, text, obj, i;
student_Obj = {
    "class_9413A": [
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        },
        {
            "IDNo": "2150428",
            "LastName": "Fama",
            "FirstName": "Charlene"
        },
        {
            "IDNo": "2150000",
            "LastName": "Garcia",
            "FirstName": "Jay"
        },
        {
            "IDNo": "2150001",
            "LastName": "Zheng",
            "FirstName": "Anne"
        }
    ]
};
student_JSON = JSON.stringify(student_Obj);
localStorage.setItem("listJSON", student_JSON);

text = localStorage.getItem("listJSON");
obj = JSON.parse(text);
for(i in obj.class_9413A) {
    output = obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
    document.write( '<option>'+output+'</option>');
}
// console.log(output);
//document.getElementById("blue").innerHTML = output;
