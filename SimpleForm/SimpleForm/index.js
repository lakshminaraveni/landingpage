const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('submit')
const errorElement = document.getElementById('error');

form.addEventListener('click',()=>{
    console.log('buttonclicked');
})
form.addEventListener('click',(e) => {
let messages=[];
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.value === ' ' || email.value ===  null){   
messages.push('Email is required');
}
if(email.value === validRegex){   
    messages.push('Enter the valid Email');
    }
if(password.length <=6){
    messages.push('password must be longer than 6 characters');
}
if(password.length >=20){
    messages.push('password must not be longer than 20 characters')
}
if(messages.length>0){
    e.preventDefault();
    errorElement.innerText = messages.join( ' ,');
}
});