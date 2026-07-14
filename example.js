const student = {
    name: "Mohammed Abrar",
    department: "Computer Engineering",
    year: 3
};

function showMessage() {
    document.getElementById("message").textContent =
        `hep ${student.name}`;
}

function showDepartment() {
    alert(student.department);
}