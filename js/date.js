let dt = new Date("2023-02-02");
console.log(dt);
let newDate = new Date();
newDate.setDate(dt.getDate() + 30);
console.log(newDate);
let date = new Date("2023-03-20");
console.log(date);
if( date >= dt || date <= newDate){
    console.log("Ok");
}
else{
    console.log("Erroe")
}