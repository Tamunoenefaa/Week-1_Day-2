const form = document.querySelector('form#userForm') //Selects form

const handleSubmit = function(ev){ //Submit action
    ev.preventDefault()  
    const form = ev.target //<form id ="userForm"></> Basically saying where the action is used
    const userName = form.userName.value 
    const age = form.age.value // 
    const users = document.querySelector('#users') //gets the line div below
    users.innerHTML+= '<p>' + userName + ', ' + age + '</p>' //each time the button is clicks adds name
    form.reset()
    form.userName.focus()
    
}
form.addEventListener('submit',handleSubmit) 