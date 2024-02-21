document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            grecaptcha.ready(function () {
                grecaptcha.execute('6Ld21nkpAAAAAKJtxLK6l2iPiMGwJoVEOcqZO97y', {
                    action: 'submit_form'
                }).then(function (token) {
                    submitForm(token);
                });
            });
        }
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        displayNotification('All fields are required', 'error');
        return false;
    }

    if (!validateEmail(email)) {
        displayNotification('Please enter a valid email address', 'error');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function submitForm(token) {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    formData.append('recaptcha_token', token);

    fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayNotification(data.message, 'success');
                form.reset();
            } else {
                displayNotification(data.message, 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = type;
}
