/*
Programming Project 2
Scripts
    
Author: Matheo Andres Cabrera 
Date: 9/3/24

Filename: myScripts.js
*/ 

//declare variables for contact name, contact number, button, and contact list
const newName = document.getElementById("newNameTxt"); //contact name user input
const newNum = document.getElementById("newNumTxt"); //contact number user input
const addContactBtn = document.getElementById("newContactBtn"); //button
const contactList = document.getElementById("contactList"); //contact list

//event handlers
addContactBtn.addEventListener("click", addContact);
contactList.addEventListener("click", function(){ removeContact(event)});

//function to add item from user input into list
function addContact(){
    if (newName.value != "" && newNum.value != "")   //verify that user input is not blank
    {
        const addItem = document.createElement("li") //create list item
        //set value of list item to contact name and contact number
        addItem.innerHTML = newName.value + " - " + newNum.value
        contactList.appendChild(addItem) //add input to list
        //remove text from textboxes
        newName.value = ""
        newNum.value = ""
    }
    else
    {
        //error message if input is invalid/blank
        alert("Input a name and number to add to the Contact List.")
    }
}
function removeContact(event)
{
    //This function removes a contact from the contact list
    if(event.target.localName == "li") //check if target is a list item
    {
        const item = event.target //isolate list item
        item.remove(); //remove list item
    }
}


