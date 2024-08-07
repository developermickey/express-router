const express = require('express');
const app = express();
const router = express.Router()
const users = require('./routes/user');
const posts = require('./routes/post');


// Home routes
app.get('/', function(req, res) {
    res.send('Welcome Home');
});


// All Users routes refactered
app.use('/users', users);

//  Post routes refactered
app.use('/posts', posts);



app.listen(3000, () => {
    console.log('listening on port 3000');
});