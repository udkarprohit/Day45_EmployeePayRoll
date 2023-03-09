
window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input',function(){
        if( name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayRollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;

        }
});
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});
});


const save = () =>{
    
    try{
        let employeePayRollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayRollData);
    }catch(e){
        return;
    }
    
  }

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("employeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    // alert(employeePayrollList.toString());
    localStorage.setItem("employeePayrollList", JSON.stringify(employeePayrollList));
    location.href="html/employee_record.html";

}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach( item =>{
        if(item.checked){
            setItems.push(item.value);
        }
    });
    return setItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const createEmployeePayroll = () => {
    let employeePayRollData = new EmployeePayRollData();
    try{
        employeePayRollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayRollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayRollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayRollData.department = getSelectedValues('[name=department]');
    employeePayRollData.salary = getInputValueById('#salary');
    employeePayRollData.note = getInputValueById('#notes');
    let date = getInputValueById("#day") + " " + getInputValueById("#month")+" "+getInputValueById("#year");
    var a = new Date(date);
    employeePayRollData.startDate = a;
    // alert(employeePayRollData.toString());
    return employeePayRollData;
}


const unSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setValue = (id, value) =>{
    const element = document.querySelectorAll(id);
    element.value = value;
}

const setTextValue = (id, value) =>{
    const element = document.querySelector(id);
    element.textContent = value;
}

const resetForm = () =>{
    setValue("#name","");
    unSelectedValues('[name=profile]');
    unSelectedValues('[name=gender]');
    unSelectedValues('[name=department]');
    setTextValue('.text-error', '');
    setTextValue('.startDate-error', '');
    setTextValue('.salary-output', '5000000');
    setValue('#salary','500000');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','Jan');
    setValue('#year','2020');
}


