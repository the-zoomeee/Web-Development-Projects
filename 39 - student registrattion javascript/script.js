document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let studentName = document.getElementById('studentName').value;
    let studentEmail = document.getElementById('studentEmail').value;
    let studentPhone = document.getElementById('studentPhone').value;
    let course = document.getElementById('course').value;

    if (!studentName || !studentEmail || !studentPhone || !course) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Registration successful!');
    }
});
