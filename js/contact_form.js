const form = document.getElementById('contactForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('https://script.google.com/u/1/home/projects/1AHIel-SAbR_slEVkbCQYh7Urv3GIO4IE3-lrjBO9eZ_rUOPp6WcTBnUe', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            alert('Form submitted successfully!');
            form.reset();
        })
        .catch(error => console.error('Error:', error));
}