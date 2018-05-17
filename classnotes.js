const form = document.querySelector('form#userForm') //Selects form

const handleSubmit = function(ev){ //Submit action
    ev.preventDefault()  
    const form = ev.target //<form id ="userForm"></> Basically saying where the action is used
    const userName = form.userName.value 
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value 
    const users = document.querySelector('#users') //gets the line div below
       
    const list = document.createElement('ul') //creat a unorderd list element and assign variable list
   
    const nameItem=document.createElement('li') //creaee li elementt
    nameItem.textContent=`Name: ${userName}`//get name of list and sets it equal to name input

    const ageItem=document.createElement('li')
    ageItem.textContent=`Age: ${age}`//get name of list and sets it equal to age input

    list.appendChild(nameItem)//puts age Item under list
    list.appendChild(ageItem)//

    users.appendChild(list)//make list a child under the div
 
    form.reset() // reset form method
    form.userName.focus() //Explicitly tell it to focus on userName variable
    
}
form.addEventListener('submit',handleSubmit) 