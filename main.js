let  addToDoButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todoContainer');
let inputfield = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var pargrapgh = document.createElement('p')
    pargrapgh.classList.add('paragrapgh-styling');
    pargrapgh.innerText = inputfield.value;
    toDoContainer.appendChild(pargrapgh);
    inputfield.value = "";
    pargrapgh.addEventListener('click', function(){
        pargrapgh.style.textDecoration = "line-through";
    })
    pargrapgh.addEventListener('dblclick', function(){
        toDoContainer.removeChild(pargrapgh);
    })
})
