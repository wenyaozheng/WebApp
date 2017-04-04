/**
 * Created by Ling on 4/2/2017.
 */
function studentListData() {
    var student_Obj = {
        "class_9413A": [
             {
               "IDNo": "2153240",
               "LastName": "Alcaide",
               "FirstName": "Arvince"
           },
           {
               "IDNo": "2151666",
               "LastName": "Andawi",
               "FirstName": "Mark"
           },
           {
               "IDNo": "2152201",
               "LastName": "Bayote",
               "FirstName": "Russel"
           },
           {
               "IDNo": "2154396",
               "LastName": "Benitez",
               "FirstName": "Jinci"
           },
            {
               "IDNo": "2156179",
               "LastName": "Bobadilla",
               "FirstName": "Karl"
           },
            {
               "IDNo": "2116832",
               "LastName": "Cooper",
               "FirstName": "Colvin"
           },
            {
               "IDNo": "2153578",
               "LastName": "Cruz",
               "FirstName": "Dwight"
           },
            {
               "IDNo": "2152598",
               "LastName": "Culbengan",
               "FirstName": "Denver"
           },
            {
               "IDNo": "2153797",
               "LastName": "De Guzman",
               "FirstName": "Ryan"
           },
            {
               "IDNo": "2152430",
               "LastName": "Dela Rosa",
               "FirstName": "Mon"
           },
            {
               "IDNo": "2156749",
               "LastName": "Diaz",
               "FirstName": "Stephen"
           },
            {
               "IDNo": "2152195",
               "LastName": "Gagelonia",
               "FirstName": "Jenmar"
           },
            {
               "IDNo": "2151796",
               "LastName": "Garcia",
               "FirstName": "Jay"
           },
            {
               "IDNo": "2143111",
               "LastName": "Garcia",
               "FirstName": "Mark"
           },
            {
               "IDNo": "2150218",
               "LastName": "Genove",
               "FirstName": "Sean"
           },
            {
               "IDNo": "2150506",
               "LastName": "Laban",
               "FirstName": "Joshua"
           },
            {
               "IDNo": "2153777",
               "LastName": "Luna",
               "FirstName": "Jaryd"
           },
            {
               "IDNo": "2103929",
               "LastName": "Madayag",
               "FirstName": "Raoul"
           },
            {
               "IDNo": "2152818",
               "LastName": "Manaois",
               "FirstName": "Von"
           },
            {
               "IDNo": "2153124",
               "LastName": "Pimentel",
               "FirstName": "Jeremiah"
           },
            {
               "IDNo": "2135211",
               "LastName": "Sam",
               "FirstName": "Paul"
           },
            {
               "IDNo": "2157015",
               "LastName": "Sanchez",
               "FirstName": "Daiben"
           },
            {
               "IDNo": "2158213",
               "LastName": "Siiten",
               "FirstName": "Francis"
           },
            {
               "IDNo": "2153948",
               "LastName": "Suarez",
               "FirstName": "Benedict"
           },
            {
               "IDNo": "2153357",
               "LastName": "Valdez",
               "FirstName": "Raphael"
           },
            {
               "IDNo": "213455",
               "LastName": "Zipagan",
               "FirstName": "Jerome"
           },
            {
               "IDNo": "2154290",
               "LastName": "Calmerin",
               "FirstName": "Kathleen"
           },
            {
               "IDNo": "2155739",
               "LastName": "Castro",
               "FirstName": "Glyza"
           },
            {
               "IDNo": "2152834",
               "LastName": "Centino",
               "FirstName": "Sarah"
           },
            {
               "IDNo": "2150428",
               "LastName": "Fama",
               "FirstName": "Charlene"
           },
            {
               "IDNo": "2153674",
               "LastName": "Leonen",
               "FirstName": "Aerhielle"
           },
            {
               "IDNo": "2156133",
               "LastName": "Macario",
               "FirstName": "Maricris"
           },
            {
               "IDNo": "2154439",
               "LastName": "Marinas",
               "FirstName": "Phebe"
           },
            {
               "IDNo": "2155912",
               "LastName": "Ragay",
               "FirstName": "claudine"
           },
            {
               "IDNo": "2155690",
               "LastName": "Sanidad",
               "FirstName": "Stephanie"
           },
            {
               "IDNo": "2150065",
               "LastName": "Zheng",
               "FirstName": "Anne"
           },
            {
               "IDNo": "2150084",
               "LastName": "Zheng",
               "FirstName": "Jane"
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
            },
            {
                "IDNo": "...",
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

    var student_JSON = JSON.stringify(student_Obj);
    localStorage.setItem("classListJSON", student_JSON);
}


