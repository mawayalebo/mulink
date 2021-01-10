const express = require('express');
const app = express();
const mongoose =require('mongoose');
const { keys } = require('./keys');
const authRoutes = require('./routes/authRoutes');

//set view engine
app.set('view engine', 'ejs');

//middleware to use assets in public folder
app.use(express.static('public'));

//connect to database
mongoose.connect(keys.mongo.connectString,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((results)=>{
        app.listen(3000, ()=>{
            console.log('light folding port 3000');
        });
    })
    .catch(err=>console.log(err));

//app routes

app.get('/', (req, res)=>{
    res.render('home');
})
app.use(authRoutes.route);