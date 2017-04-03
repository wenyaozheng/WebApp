/**
 * Created by Ling on 4/2/2017.
 */
function temp_classcode(input){
    window.localStorage.removeItem("classcode");
    localStorage.setItem("classcode", input);
    console.log(input);
    colorScheme(input);
    dropDown(input);
    printStudentList(input);
}

function storeData(){
    usersListData();
    classroomsListData();
    studentListData();
}
