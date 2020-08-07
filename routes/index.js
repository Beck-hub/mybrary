 /// first route,
 // everything for when we don't have a route in our url
 const express = require("express");
 const router = express.Router(); // exportingthis

 router.get("/", (req,res) => {
     res.render('index');
 })  // localhost:3000

 module.exports = router;