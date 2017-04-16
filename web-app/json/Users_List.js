/**
 * Created by Ling on 4/3/2017.
 */
function usersListData(){
    var users_Obj = {
        "Users":[

            {
                "username":"user1",
                "password":"1",
                "name":"user1",
                "idno":"123"
            },

            {
                "username":"user2",
                "password":"2",
                "name":"user2",
                "idno":"456"

            },

            {
                "username":"user3",
                "password":"3",
                "name":"user3",
                "idno":"789"
            }

        ]
    };
    //save data

    var users_JSON = JSON.stringify(users_Obj);
    localStorage.setItem("usersListJSON", users_JSON);
}
