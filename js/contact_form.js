    const scriptURL =
        'https://script.google.com/macros/s/AKfycbyquMWpKJTGdDEIO__Pdc7DCLjPZWOm34LsXSS0Jdot-hSyaUieQIxJ8NPPyVsK9DYZ/exec';
const form = document.getElementById('google-sheet');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validate hCaptcha first
    const hcaptchaResponse = form.querySelector('.h-captcha-response').value;
    if (!hcaptchaResponse) {
        alert('Please complete the captcha.');
        return;
    }

    // If hCaptcha validation passes, proceed with form submission
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            alert("Thank You! An Expert will contact you soon...");
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => console.error('Error!', error.message));
}); 