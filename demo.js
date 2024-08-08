const express = require('express');
const app = express();
const router = express.Router()
const users = require('./routes/user');
const posts = require('./routes/post');
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));


// Cookies Send
 
// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "hello");
//     res.cookie("madeIn", "India");
//     res.send("sent you some cookies");
// })

// // Home routes
// app.get('/', (req, res) => {
//     console.dir(req.cookies);
//     res.send('Welcome Home');
// });


// app.get("/getsignedcookie", (req, res) =>{
// res.cookie("made-in", "India", {signed: true});
// res.send("Signed Cookie");
// })

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("Verify");
// })

// app.get("/greed", (req, res) =>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hi, ${name} `);
// })

// // All Users routes refactered
// app.use('/users', users);

// //  Post routes refactered
// app.use('/posts', posts);



app.listen(3000, () => {
    console.log('listening on port 3000');
});