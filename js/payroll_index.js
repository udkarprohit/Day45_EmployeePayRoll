var day = document.querySelector("#day");
var month = document.querySelector("#month");
let year = document.querySelector("#year");
day.addEventListener('input', checkDate);
month.addEventListener('input', checkDate);
year.addEventListener('input', checkDate);

function checkDate() {
    const date = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const selectedDate = new Date(`${year}-${month}-${date}`);
    const currentDate = new Date();
    const dateDiff = (currentDate.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24);
    let dateError = document.querySelector(".startDate-error");
    if (dateDiff < 0) {
        dateError.textContent = " Start Date is Future Date";
    }
    else if (dateDiff > 30) {
        dateError.textContent = " Start Date is beyond 30 days";
    }
    else {
        dateError.textContent = "";
    }
}
