const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formDataJson = {};
    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    const token = grecaptcha.getResponse();
    if (!token) {
        swal("Oops!", "Please complete the hCaptcha challenge.", "error");
        return;
    }

    formDataJson['token'] = token;

    const url = 'https://script.google.com/macros/s/AKfycbxSAHTfGVK_nyrsGl3pn1D7ujiIB6ML5D21KvuK9K92Y5aGyVQaAIMgH2q2EMwhKhvG/exec';
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
        });
        if (response.ok) {
            swal("Success!", "Message sent successfully!", "success");
            form.reset();
        } else {
            swal("Oops!", "Failed to send message. Please try again later.", "error");
        }
    } catch (error) {
        console.error('Error sending message:', error);
        swal("Oops!", "An error occurred. Please try again later.", "error");
    }
});