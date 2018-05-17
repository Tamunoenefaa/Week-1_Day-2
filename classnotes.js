const form = document.querySelector('form#userForm') //Selects form

const handleSubmit = function(ev){ //Submit action
    ev.preventDefault()  
    const form = ev.target //<form id ="userForm"></> Basically saying where the action is used
    const userName = form.userName.value 
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value 
    const users = document.querySelector('#users') //gets the line div below
       
    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}`
    p.style.backgroundColor= favoriteColor

    users.appendChild(p) //each time the button is clicks adds name
 
    form.reset() // reset form method
    form.userName.focus() //Explicitly tell it to focus on userName variable
    
}
form.addEventListener('submit',handleSubmit) 