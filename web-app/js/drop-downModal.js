/**
 * Created by s326lab on 31/03/2017.
 */
var student_Obj, student_JSON, text, obj, i;
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
    ],
    "class_9413B": [
        {
            "IDNo": "SAMPLE",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "2150000",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "...",
            "LastName": "...",
            "FirstName": "..."
        }
    ],
    "class_9414A": [
        {
            "IDNo": "SAMPLE",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "2150000",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "...",
            "LastName": "...",
            "FirstName": "..."
        }
    ],
    "class_9414B": [
        {
            "IDNo": "SAMPLE",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "2150000",
            "LastName": "...",
            "FirstName": "..."
        },
        {
            "IDNo": "...",
            "LastName": "...",
            "FirstName": "..."
        }
    ]
};
student_JSON = JSON.stringify(student_Obj);
localStorage.setItem("listJSON", student_JSON);

text = localStorage.getItem("listJSON");
obj = JSON.parse(text);

function dropDown(input) {
    switch(input) {
        case "class_9413A":
            for(i in obj.class_9413A) {
                output = obj.class_9413A[i].LastName + " " + obj.class_9413A[i].FirstName;
                document.write( '<option value="'+obj.class_9413A[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9413B":
            for(i in obj.class_9413B) {
                output = obj.class_9413B[i].LastName + " " + obj.class_9413B[i].FirstName;
                document.write( '<option value="'+obj.class_9413B[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414A":
            for(i in obj.class_9414A) {
                output = obj.class_9414A[i].LastName + " " + obj.class_9414A[i].FirstName;
                document.write( '<option value="'+obj.class_9414A[i].IDNo+'">'+output+'</option>');
            }
            break;
        case "class_9414B":
            for(i in obj.class_9414B) {
                output = obj.class_9414B[i].LastName + " " + obj.class_9414B[i].FirstName;
                document.write( '<option value="'+obj.class_9414B[i].IDNo+'">'+output+'</option>');
            }
            break;
        default:
            console.log("error");
    }
}