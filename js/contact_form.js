document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var token = grecaptcha.getResponse();
    if (!token) {
        showAlert('Please complete the captcha', 'error');
        return;
    }
    formData.append('captchaToken', token);
    sendData(formData);
});

function sendData(formData) {
    fetch('https://script.google.com/macros/s/AKfycbxD3f0XvPKdA2co-hreO35U1H_dKN0rXOx8nRHuME0C5gjWFGGt_MXkw_t1pZM3UWc7DA/exec', {
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
            showAlert('We have received your message, We will contact you soon!', 'success');
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