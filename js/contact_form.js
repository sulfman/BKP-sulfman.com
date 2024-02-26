 const scriptURL = 'https://script.google.com/macros/s/AKfycbwVR4t3jNpSt_I7J4kbvgww414SG7O7MLZf7BOK5jEqdncIRnZz63EpZ9pkVJGwgcOTSQ/exec'
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