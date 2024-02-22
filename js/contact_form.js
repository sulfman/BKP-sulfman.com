document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var token = grecaptcha.getResponse();
    if (!token) {
        alert('Please complete the captcha');
        return;
    }
    formData.append('captchaToken', token);
    sendData(formData);
});

function sendData(formData) {
    fetch('https://script.google.com/macros/s/AKfycbwqSkrAA8odfSbeh78akit9VRznp47OTuIvyyn59-x7E8csR7AgiT2ANCr5Nh2M8EEfHQ/exec', {
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
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset(); // Reset the form after successful submission
        })
        .catch(error => {
            console.error('There was an error!', error);
            alert('An error occurred while submitting the form. Please try again later.');
        });
}