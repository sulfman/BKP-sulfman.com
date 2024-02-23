document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Check if hCaptcha is verified
    const response = window.hcaptcha.getResponse();
    if (!response) {
        // Show error message if hCaptcha is not verified
        swal("Error!", "Please complete the CAPTCHA verification.", "error");
        return;
    }

    const formData = new FormData(this);
    const url = 'https://docs.google.com/forms/d/17vh0sAIuqDWZ2hV59V0foQ9x9_h43CDHAB_FW_axkl0'; // Replace with your Google Form URL

    try {
        const submitData = {
            ...Object.fromEntries(formData.entries()),
            'h-captcha-response': response
        };
        const response = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams(submitData)
        });
        if (response.ok) {
            // Show success message
            swal("Success!", "Form submitted successfully!", "success");
            // Optionally, reset the form
            this.reset();
        } else {
            // Show error message
            swal("Error!", "Form submission failed. Please try again later.", "error");
        }
    } catch (error) {
        // Show error message
        swal("Error!", "There was an error submitting the form. Please try again later.", "error");
        console.error('Error submitting form:', error);
    }
});