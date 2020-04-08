const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const outputOne = document.querySelector('#output-1')
const outputTwo = document.querySelector('#output-2')

weatherForm.addEventListener('submit', (e) => {
   e.preventDefault()

   const location = search.value

   outputOne.textContent = 'Loading..'
   outputTwo.textContent = ''

   fetch('http://localhost:3000/weather?address=' + location).then((response) => {
       response.json().then((data) => {
           if (data.error) {
               outputOne.textContent = data.error
           } else {
               outputOne.textContent = data.location
               outputTwo.textContent = data.forecast
           }
       })
   })
})