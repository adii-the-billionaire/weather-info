//import { response } from "express"

console.log('Client side javascript file is loaded!')
    //here is you gonna fetch the data in our chrome window from your localhost


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const ram = document.querySelector('#ram')
const sita = document.querySelector('#sita')
    //ram.textContent = 'Loading...'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    ram.textContent = 'Loading...'
    sita.textContent = ' '

    fetch('/weather?address' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                ram.textContent = data.error
            } else {
                ram.textContent = data.location
                sita.textContent = data.forecast
            }
        })
    })

})