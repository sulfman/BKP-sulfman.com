document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    sendData(formData);
});

function sendData(formData) {
    fetch('https://script.google.com/macros/s/AKfycbx9SRbj9c7UXfhoMiSFwmfcMWOcZ1Jn3fC0UC8ok5FNm_xQqAqZxXC6D2L6j9yJLdzV9w/exec', { // Replace 'your-apps-script-url' with the actual URL of your Google Apps Script endpoint
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            showAlert('Form submitted successfully!', 'success');
            document.getElementById('contactForm').reset(); // Reset the form after successful submission
        })
        .catch(error => {
            console.error('There was an error!', error);
            showAlert('An error occurred while submitting the form. Please try again later.', 'error');
        });
}

function showAlert(message, type) {
    swal({
        title: '',
        text: message,
        icon: type,
        button: 'OK',
    });
}
