// Function to add a new row with your specific values
function addCourse() {
    const container = document.getElementById('course-container');
    const newRow = document.createElement('div');
    newRow.className = 'course-row';
    
    // We use the same options as the image provided
    newRow.innerHTML = `
        <select class="grade">
            <option value="3.85">A+</option>
            <option value="3.55">A</option>
            <option value="3.25">A-</option>
            <option value="2.95">B+</option>
            <option value="2.95">B</option>
            <option value="2.65">B-</option>
            <option value="2.65">C+</option>
            <option value="2.35">C</option>
            <option value="2.05">C-</option>
            <option value="1.45">D</option>
            <option value="1.15">D-</option>
        </select>
        <input type="number" class="credits" placeholder="Credits">
    `;
    container.appendChild(newRow);
}

// The Calculation Logic
function calculateGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credits');
    
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const gradeValue = parseFloat(grades[i].value);
        const creditValue = parseFloat(credits[i].value);

        if (!isNaN(creditValue) && creditValue > 0) {
            totalPoints += (gradeValue * creditValue);
            totalCredits += creditValue;
        }
    }

    const finalGPA = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    document.getElementById('result').innerText = `GPA: ${finalGPA.toFixed(2)}`;
}

function icon() {
    const result = document.getElementById('result');
    const icon = document.getElementById('icon');
    if (result.innerHTML === 'Your GPA: --') {
        icon.innerHTML = 'none';
    } else {
        icon.innerHTML = 'wow';
    }

}
