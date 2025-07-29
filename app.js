function submitAttendance() {
    const table = document.getElementById("attendanceTable");
    const rows = table.rows;
    let resultHTML = "<h2>Attendance Result:</h2><ul>";

    for (let i = 1; i < rows.length; i++) {
        const name = rows[i].cells[1].textContent;
        const checkbox = rows[i].cells[2].querySelector("input");
        if (checkbox.checked) {
            resultHTML += `<li class="present">${name} is Present</li>`;
        } else {
            resultHTML += `<li class="absent">${name} is Absent</li>`;
        }
    }

    resultHTML += "</ul>";
    document.getElementById("result").innerHTML = resultHTML;
}
