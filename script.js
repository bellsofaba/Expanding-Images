
//Bringing in all the panels into our JS
const panels = document.querySelectorAll('.panel') //allows us to select anything e.g p, h1, class, id etc
//.querySelectorAll puts all the panels into what is known as the node list which is similar to an array


//high order array method that take in a function as an argument
panels.forEach((panel)=> {
    //we want to have an event listener on each panel so when we click it, something happens
    panel.addEventListener('click', ()=> { //We want to listen for a click and when it happens, we want to run a function
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')//We want to remove all the active classes and put the active class on the one that is clicked

    })
}