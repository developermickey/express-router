const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send("I am the user");
});


router.get('/:id', function (req, res) {
    let {id } = req.params;
    res.send(`I am ${id}`);
});


module.exports = router;