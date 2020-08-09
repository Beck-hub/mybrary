const express = require("express");
const router = express.Router(); // exportingthis
const Author = require("../models/author");

// All Authors Route
router.get("/", async (req,res) => {
    let searchOptions = {};
    if (req.query.name != null && req.query.name !== "") {
        searchOptions.name = new RegExp(req.query.name, "i") // new regular expression & this will be case insensitive
    }
    try {
        const authors = await Author.find(searchOptions);
        res.render('authors/index', {authors: authors, searchOptions: req.query});

    } catch {
        redirect("/")

    }
})  ;
 // New Author Route
 router.get("/new", (req,res) => {
    res.render("authors/new", {author: new Author()});
});
// Create Author Route
router.post("/", async (req,res) => {
    const {name} = req.body;
    const author = new Author({name});
    try {
       const newAuthor = await author.save();
         // res.redirect(`authors/${newAuthor.id}`)
         res.redirect(`authors`)
    } catch {
        res.render('authors/new', {
            author: author, 
            errorMessage: 'Error creating Author'
        })
    }
    
});
module.exports = router; 