const form = document.querySelector('form#userForm') //Selects form

const handleSubmit = function(ev){ //Submit action
    ev.preventDefault()  
    const form = ev.target //<form id ="userForm"></> Basically saying where the action is used
    const userName = form.userName.value 
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value 
    const users = document.querySelector('#users') //gets the line div below
       
    const list = document.createElement('ul') //creat a paragraph element and assign variable p
   
    const nameItem=document.createElement('li')
    nameItem.textContent=`Name: ${userName}`

    const ageItem=document.createElement('li')
    ageItem.textContent=`Age: ${age}`

    list.appendChild(nameItem)
    list.appendChild(ageItem)

    users.appendChild(list) //each time the button is clicks adds name
 
    form.reset() // reset form method
    form.userName.focus() //Explicitly tell it to focus on userName variable
    
}
form.addEventListener('submit',handleSubmit) 