document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Validate hCaptcha
    if (hCaptchaToken) {
        // Form data
        const formData = new FormData(this);
        formData.append('h-captcha-response', hCaptchaToken);

        // Send form data to Google Sheets using Google Apps Script
        google.script.run.submitForm(Array.from(formData.entries()));
    } else {
        alert('Please complete the hCaptcha challenge.');
    }
});

let hCaptchaToken = '';

function verifyCallback(token) {
    hCaptchaToken = token;
}
