document.getElementById('hostelForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;

    if (!name || !email || !phone || !dob) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
