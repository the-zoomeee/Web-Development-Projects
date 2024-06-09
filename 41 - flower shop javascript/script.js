document.getElementById('flowerForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let combo = document.getElementById('combo').value;

    if (!name || !email || !combo) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Bouquet ordered successfully!');
    }
});
