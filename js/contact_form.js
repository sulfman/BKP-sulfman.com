$(document).ready(function () {
    $('#contactForm').submit(function (event) {
        event.preventDefault();
        var formData = $(this).serialize();
        var captchaResponse = $("#h-captcha-response").val();

        // Perform basic form validation
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        if (name == '' || email == '' || message == '') {
            alert('Please fill in all fields');
            return;
        }

        // Perform hCaptcha validation
        if (captchaResponse === '') {
            alert('Please complete the captcha');
            return;
        }

        // Ajax submission
        $.ajax({
            type: 'POST',
            url: 'js/submit_form.php',
            data: formData + '&h-captcha-response=' + captchaResponse,
            success: function (response) {
                // Handle success response
                alert(response);
            },
            error: function (xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
            }
        });
    });
});