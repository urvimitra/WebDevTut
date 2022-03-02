const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
//const bodyparser=require("body-parser");
const mongoose=require("mongoose");

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.get('/post', (req, res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.send("data submitted")
    }).catch(()=>{
        res.status(400).send("submit failed")

    })
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});