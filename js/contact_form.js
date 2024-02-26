document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    sendData(formData);
});

function sendData(formData) {
    fetch('https://script.google.com/macros/s/AKfycbxSAHTfGVK_nyrsGl3pn1D7ujiIB6ML5D21KvuK9K92Y5aGyVQaAIMgH2q2EMwhKhvG/exec', {
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
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}
