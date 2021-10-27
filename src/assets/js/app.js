const contactForm = document.querySelector('.contactForm');
// var con = require('./database');
// var session = require('express-session');
// const subscribeForm = document.querySelector('.subscribeForm');

// let subEmail = document.getElementById('Subemail');

let names = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');


//session

// app.use(session({

//     secret: 'ABCDefg',
//     resave: false,
//     saveUninitialized: true

// }));

//Subscribe function

// subscribeForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let subForm = {
//         subEmail: subEmail.value 
//     }

//     let xhr = new XMLHttpRequest();
//    xhr.open('POST', '/');
//    xhr.setRequestHeader('content-type', 'application/json');
//    xhr.onload = function(){
//        console.log(xhr.responseText);
//        if(xhr.responseText == 'success'){

//             alert('Email sent');
//             subEmail.value = '';
            
//     }else{
//         alert('Somthing went wrong');
//     }

//    }
//     xhr.send(JSON.stringify(subForm));
// })

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

   let formData = {
       name: names.value,
       email: email.value,
       subject: subject.value,
       message: message.value
       
   }

   let xhr = new XMLHttpRequest();
   xhr.open('POST', '/');
   xhr.setRequestHeader('content-type', 'application/json');
   xhr.onload = function(){
       console.log(xhr.responseText);
       if(xhr.responseText == 'success'){
  
            res.send('Your Message sent');
            names.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
    }else{
        alert('Somthing went wrong');
    }

   }
    xhr.send(JSON.stringify(formData));
})