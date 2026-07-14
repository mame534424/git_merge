const student = {
    name: "Mohammed Abrar",
    department: "Electrical and Computer Engineering",
    year: 3
};

function showMessage() {
    document.getElementById("message").textContent =
        `Welcome ${student.name}`;
}

function showDepartment() {
    alert(student.department);
}