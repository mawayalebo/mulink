const express = require('express');
const app = express();
const mongoose =require('mongoose');
const { keys } = require('./keys');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

//set view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//connect to database
mongoose.connect(keys.mongo.connectString,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((results)=>{
        app.listen(3000, ()=>{
            console.log('light folding port 3000');
        });
    })
    .catch(err=>console.log(err));

//app routes
app.get('*', checkUser);
app.get('/', (req, res)=>{
    res.render('home');
})
app.use(authRoutes.router);
app.get('/books', requireAuth, (req, res)=>{
    res.render('books');
});