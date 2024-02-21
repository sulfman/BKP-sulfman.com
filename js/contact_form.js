const scriptURL = 'https://script.google.com/macros/s/AKfycbyquMWpKJTGdDEIO__Pdc7DCLjPZWOm34LsXSS0Jdot-hSyaUieQIxJ8NPPyVsK9DYZ/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    // Get the hCaptcha response token
    const hCaptchaResponse = document.getElementById('h-captcha-response').value;

    // Validate hCaptcha token
    if (!hCaptchaResponse) {
        alert("Please complete the hCaptcha challenge.");
        return;
    }

    // If hCaptcha token is valid, submit the form
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            alert("Thank You! An Expert will contact you soon...");
            // Reset the form after successful submission if needed
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});