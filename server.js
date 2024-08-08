const express = require('express');
const app = express();
const router = express.Router()
const users = require('./routes/user');
const posts = require('./routes/post');
const session = require('express-session')
const flash = require('connect-flash');
const path = require('path');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
    res.locals.suscessMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})




app.get("/test",(req, res) => {
   
    res.send("Test Successful");
})

// app.get("/reqcount",(req, res) => {
//     if( req.session.count){
//         req.session.count++;
//     }else {
//         req.session.count = 1;
//     }
//     res.send(`Request Count ${req.session.count} Times`);
// });


app.get("/register", (req, res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name == "anonymous"){
        req.flash("error", "user Not registered successfully")
    }else {
        req.flash("success", "user registered successfully")
    }

    res.redirect("/hello");
})

app.get("/hello", (req, res) => {
    res.render("page.ejs", {name: req.session.name});
    // res.render("page.ejs", {name: req.session.name, msg: req.flash("success")});
})

// app.get("/hello", (req, res) => {

//     res.send(`hello, ${req.session.name}`);
// })

app.listen(3000, () => {
    
    console.log('listening on port 3000');
});