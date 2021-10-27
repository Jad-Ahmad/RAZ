const express = require('express');
const app = express();
const con = require('./src/assets/js/database.js');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('src'));
app.use(express.json());

app.set('view engine', 'ejs');
// get pages
app.get('/', (req, res)=>{

    res.sendFile(__dirname + '/src/views/index.html')
})
app.get('/index', (req, res)=>{

    res.sendFile(__dirname + '/src/views/index.html')
})
app.get('/contact', (req, res)=>{

    res.sendFile(__dirname + '/src/views/contact.html')
})
app.get('/login', (req, res)=>{

    res.sendFile(__dirname + '/src/views/login.html')
})
app.get('/about', (req, res)=>{

    res.sendFile(__dirname + '/src/views/about.html')
})

app.get('/Dashboard', (req, res)=>{

    res.sendFile(__dirname + '/src/views/Dashboard.html')
})
// app.get('/dashboard', (res, req)=>{
//     res.render('/src/views/Dashboard.ejs')
// })
app.get('/products', (req, res)=>{

    res.sendFile(__dirname + '/src/views/products.html')
})

// app.post('/', (req, res)=> {
//     console.log(req.body);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user:'baytamjad@gmail.com',
//             pass: 'a7mad@74'
//         }
//     })

//     const mailOptions = {
//         from: req.body.email,
//         to: 'baytamjad@gmail.com',
//         subject: `Message from ${req.body.email}: ${req.body.subject}`,
//         text: req.body.message
//     }

//    transporter.sendMail(mailOptions, (error, info) =>{
//        if(error){
//            console.log(error);
//        }
//        else{
//            console.log('Email send');
//            res.send('success')
//        }
//    })
// })

app.post('/', (req, res)=> {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'baytamjad@gmail.com',
            pass: 'a7mad@74'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'baytamjad@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

   transporter.sendMail(mailOptions, (error, info) =>{
       if(error){
           console.log(error);
       }
       else{
           console.log('Email send');
           res.send('success')
       }
   })
})

app.post('/auth_login', (req, res)=>{

    console.log(req.body)
    console.log('clicked succes');
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;

    var sql = 'select * from users where users_email= ? and users_pass=?;';

    con.query(sql, [useremail], function(err, result){
        if(err) throw err;

        if(result.length && userpassword.body.useremail){
            req.session.email = email;
            res.redirect('/src/views/Dashboard.html')
        }

    })
})

app.listen(PORT, ()=>{

    console.log(`server running on port ${PORT}`)
  })
