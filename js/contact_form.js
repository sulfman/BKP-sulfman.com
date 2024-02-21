 const scriptURL = 'https://script.google.com/macros/s/AKfycbyquMWpKJTGdDEIO__Pdc7DCLjPZWOm34LsXSS0Jdot-hSyaUieQIxJ8NPPyVsK9DYZ/exec'
 const form = document.forms['google-sheet']

 form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, {
             method: 'POST',
             body: new FormData(form)
         })
         .then(response => alert("Thank You ! We will contact you soon..."))
         .catch(error => console.error('Error!', error.message))
 })