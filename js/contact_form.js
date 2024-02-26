 const scriptURL = '<https://script.google.com/macros/s/AKfycbx9SRbj9c7UXfhoMiSFwmfcMWOcZ1Jn3fC0UC8ok5FNm_xQqAqZxXC6D2L6j9yJLdzV9w/exec>'
 const form = document.forms['contactForm']

 form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, {
             method: 'POST',
             body: new FormData(form)
         })
         .then(response => console.log('Success!', response))
         .catch(error => console.error('Error!', error.message))
 })