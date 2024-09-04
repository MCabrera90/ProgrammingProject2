const newName = document.getElementById("newNameTxt");
const newNum = document.getElementById("newNumTxt");
const addButton = document.getElementById("newContactBtn");
const pendingList = document.getElementById("contactList");

addButton.addEventListener("click", addItemFunc);
function addItemFunc(){
    
    if(newName!="" && newNum!=""){
        const addItem = document.createElement("li")
        addItem.innerHTML = newName.value + " - " + newNum.value
        pendingList.appendChild(addItem)
        newName.value = ""
        newNum.value = ""
    }
    else {
        alert("Input a name and number to add to the Contact List.")
    }
}

pendingList.addEventListener("click", function(){ removeContact(event)})
function removeContact(event){
    if(event.target.localName == "li"){
        const item = event.target
        item.remove();
    }
}


