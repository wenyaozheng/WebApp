/**
 * Created by Ling on 4/3/2017.
 */
function classroomsListData() {
    var classroom_Obj = {
        "Classrooms": [

            {
                "classcode": "9413A",
                "subject": "Networks Lec",
                "course_no": "IT322",
                "schedule": "10:30-11:30 TF"
            },

            {
                "classcode": "9413B",
                "subject": "Networks Lab",
                "course_no": "IT322L",
                "schedule": "9:00-12:00 W"
            },
            {
                "classcode": "9414A",
                "subject": "Integrative Programming Lec",
                "course_no": "IT323L",
                "schedule": "10:30-11:30 MTH"
            },
            {
                "classcode": "9414B",
                "subject": "Integrative Programming Lab",
                "course_no": "IT323L",
                "schedule": "9:00-10:30 MTH"
            }
        ]
    };

    var classroom_JSON = JSON.stringify(classroom_Obj);
    localStorage.setItem("classroomListJSON", classroom_JSON);
}

