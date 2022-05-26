const nameInput = document.querySelector(".name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const complete = document.querySelector(".complete");
const errorCodes = document.querySelectorAll(".error");

function validateForm(){

    clearMessages();
    let errorNote = false;

    if(nameInput.value.length < 5){
        errorCodes[0].innerText = "Name must be a minimum of 5 characters";;
        nameInput.classList.add("error");
        errorNote = true;
    }

    if(!emailIsValid(email.value)){
        errorCodes[1].innerText = "Invalid email adress";
        email.classList.add("error");
        errorNote = true;
    }

    if(subject.value.length < 15){
        errorCodes[2].innerText = "Subject should be a minimum of 15 characters";
        subject.classList.add("error");
        errorNote = true;
    }

    if(message.value.length < 25){
        errorCodes[3].innerText = "Message should be a minimum of 25 characters";
        message.classList.add("error");
        errorNote = true;
    }
    
    if(!errorNote){
        complete.innerText = "Message sent. I will get back to you quickly!";
    }
}

function clearMessages(){
    for(let i = 0; i < errorCodes.length; i++){
        errorCodes[i].innerText = "";
    }
    complete.innerText = "";
    nameInput.classList.remove("error");
    email.classList.remove("error");
    subject.classList.remove("error");
    message.classList.remove("error");
}

function emailIsValid(email){
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
}