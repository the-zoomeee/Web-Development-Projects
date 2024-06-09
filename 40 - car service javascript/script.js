document.getElementById('serviceForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let servicePackage = document.getElementById('servicePackage').value;

    if (!name || !email || !servicePackage) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Service booked successfully!');
    }
});
