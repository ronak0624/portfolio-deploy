const router = require("express").Router();
const fs = require('fs');

const path = require('path');

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/', 'home.html'), function(err) {
        if(err) {
            throw err;
        } else {
            console.log("Home")
        }
    })
});

router.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/', 'portfolio.html'), function(err) {
        if(err) {
            throw err;
        } else {
            console.log("Port")
        }
    })
});

module.exports = router;