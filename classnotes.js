const form = document.querySelector('form#userForm') //Selects form

const handleSubmit = function(ev){ //Submit action
    ev.preventDefault()  
    const form = ev.target //<form id ="userForm"></> Basically saying where the action is used
    const userName = form.userName.value // 
    const users = document.querySelector('#users')
    users.textContent+= ' ' + userName
    form.userName.value = ''
    
}
form.addEventListener('submit',handleSubmit) 