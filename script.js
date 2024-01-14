function todo(){

    const todoInput = document.getElementById("todo")
    const todoText = todoInput.value 
    let arr = [] 
    arr.push(todoText)

    let div = document.createElement("div")
    div.innerHTML = arr + "<button class = 'deletebutton' onclick = 'remove(this)'> delete </button>"
    div.setAttribute("class", "created")
    document.getElementById("bottom").append(div)

    todoInput.value = ''

}

let deleteButton = document.createElement("button")
deleteButton.innerHTML = "delete"

function remove(button){
    const parentDiv = button.parentNode
    parentDiv.remove()
}






