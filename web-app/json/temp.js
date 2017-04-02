/**
 * Created by Ling on 4/2/2017.
 */
function temp_classcode(input){
    window.localStorage.removeItem("classcode");
    localStorage.setItem("classcode", input);
    console.log(input);
    CreateTableFromJSON(input);
}
