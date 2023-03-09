window.addEventListener('DOMContentLoaded',(event) => {
    
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('name');
});


// const createInnerHtml = () => {

//     const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
//     const innerHtml =`${headerHtml}<tr>
//     <td><img class="profie" src='../assets/1.png'></td>
//     <td>Narayana Mahadevan</td>
//     <td>Female</td>
//     <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
//     <td>300000</td>
//     <td>1 Nov 2020</td>
//     <td><img id="1" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg"><img id="1"  onclick="updaye(this)" alt="edit" src="../assets/create-black-18dp.svg"></td>
//     </tr>`;
// document.querySelector('#table-display').innerHTML = innerHtml;
// }

// const createInnerHtml = () => {
//     const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
//     let empPayrollData = createEmployeePayrollJSON()[1];
//     const innerHtml =`${headerHtml}
//     <tr>
//     <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
//     <td>${empPayrollData._name}</td>
//     <td>${empPayrollData._gender}</td>
//     <td><div class="dept-label">${empPayrollData._department[0]}</div><div class="dept-label">${empPayrollData._department[1]}</div></td>
//     <td>${empPayrollData._salary}</td>
//     <td>${empPayrollData._startDate}</td>
//     <td><img name="${empPayrollData._id}" id="1" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg"><img name="${empPayrollData._id}" id="1" onclick="update(this)" alt="edit" src="../assets/create-black-18dp.svg"></td>
//     </tr>`;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

// const createEmployeePayrollJSON = () =>{
//     let empPayrollListLocal = [
//         {
//             _name: "Rahul Rai",
//             _gender: "Male",
//             _department: ["Engineering", "HR"],
//             _salary: "500000",
//             _note: "",
//             _startDate: "1 Jan 2023",
//             _id: new Date().getTime(),
//             _profilePic: "../assets/1.png",
//         },

//         {
//             _name: "Archana Rai",
//             _gender: "Female",
//             _department: ["Engineering", "Finance"],
//             _salary: "500000",
//             _note: "",
//             _startDate: "1 Jan 2023",
//             _id: new Date().getTime() + 1,
//             _profilePic: "../assets/2.png",
//         }
//     ];
//     return empPayrollListLocal;
// }
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for( const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('employeePayrollList') ? JSON.parse(localStorage.getItem('employeePayrollList')) : [];
}

// const createInnerHtml = () => {    
//     const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
//     var innerHtml =`${headerHtml}`;
//     let empPayrollList = createEmployeePayrollJSON();
//     for( const empPayrollData of empPayrollList){
//         innerHtml = `${innerHtml}
//         <tr>
//         <td><img class="profiel" src="${empPayrollData._profilePic}" alt=""></td>
//         <td>${empPayrollData._name}</td>
//         <td>${empPayrollData._gender}</td>
//         <td>${empPayrollData._department}</td>
//         <td>${empPayrollData._salary}</td>
//         <td>${empPayrollData._startDate}</td>
//         <td><img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/delete-black-18dp.svg" alt="delete">
//         <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/create-black-18dp.svg" alt="edit"></td>
//         </td>
//         `;
//     }
//     document.querySelector("#table-display").innerHTML = innerHtml;

// }



const createInnerHtml = () => {    
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th>";
    if(empPayrollList.length == 0) return;
    let innerHtml =`${headerHtml}`;
    for( const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
        <tr>
        <td><img class="profie" src="${empPayrollData._profilePic}" alt="No pic"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td><img name="${empPayrollData._id}" id="delete" onclick="remove(this)" src="../assets/delete-black-18dp.svg" alt="delete">
        <img name="${empPayrollData._id}" id="edit" onclick="update(this)" src="../assets/create-black-18dp.svg" alt="edit"></td>
        </td>
        </tr>
        `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;

}


