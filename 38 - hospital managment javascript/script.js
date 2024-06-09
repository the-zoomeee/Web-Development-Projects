document.getElementById('hospitalForm').addEventListener('submit', function(event) {
    let patientName = document.getElementById('patientName').value;
    let doctorName = document.getElementById('doctorName').value;
    let appointmentDate = document.getElementById('appointmentDate').value;

    if (!patientName || !doctorName || !appointmentDate) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else {
        alert('Appointment booked successfully!');
    }
});
