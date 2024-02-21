const scriptURL = 'https://script.google.com/macros/s/AKfycbyquMWpKJTGdDEIO__Pdc7DCLjPZWOm34LsXSS0Jdot-hSyaUieQIxJ8NPPyVsK9DYZ/exec';
const form = document.getElementById('google-sheet');

// Function to handle form submission after hCaptcha verification
function onhCaptchaSubmit(token) {
    // Add the hCaptcha response token to a hidden input field inside the form
    const hcaptchaInput = document.createElement('input');
    hcaptchaInput.type = 'hidden';
    hcaptchaInput.name = 'h-captcha-response';
    hcaptchaInput.value = token;
    form.appendChild(hcaptchaInput);

    // Proceed with form submission
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            alert("Thank You! An Expert will contact you soon...");
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => console.error('Error!', error.message));
}

// Event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    // Submit the hCaptcha challenge programmatically
    hcaptcha.execute();
});