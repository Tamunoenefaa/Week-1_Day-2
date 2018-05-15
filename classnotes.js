const button = document.querySelector('button') // Selects the button Element
button.addEventListener('click', handleClick) //give the button an action on 'click'

function handleClick(){ //action 
    const heading=document.querySelector('#dayHeading')
    heading.textContent = 'Click'
}