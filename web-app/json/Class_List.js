/**
 * Created by Ling on 4/2/2017.
 */
function studentListData() {
    var student_Obj = {
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
            }
        ],
        "class_9413B": [
            {
                "IDNo": "SAMPLE",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            }
        ],
        "class_9414A": [
            {
                "IDNo": "SAMPLE",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            }
        ],
        "class_9414B": [
            {
                "IDNo": "SAMPLE",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "2150000",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            },
            {
                "IDNo": "...",
                "LastName": "...",
                "FirstName": "...",
                "SeatNo": ""
            }
        ]
    };

    var student_JSON = JSON.stringify(student_Obj);
    localStorage.setItem("classListJSON", student_JSON);
}


