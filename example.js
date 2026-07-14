const student = {
    name: "Mohammed",
    department: "ECE"
};

function showMessage() {
    document.getElementById("message").textContent =
        `Hello ${student.name}`;
}