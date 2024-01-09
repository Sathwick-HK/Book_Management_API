const express = require("express");


//Database

const database = require("./database");

//Initialize express

const bookm = express();
//BOOKS OPEN----------------------------------BOOKS OPEN
/*

Route              /
Description        Get all the books
Access             Public
Parameter          NONE
Methods            GET

*/

bookm.get("/",(req,res) => {
    return res.json({books: database.books})
});

/*

Route              /is
Description        Get specific book on isbn
Access             Public
Parameter          isbn
Methods            GET

*/

bookm.get("/is/:isbn",(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
    }

    return res.json({book: getSpecificBook});
});

/*

Route              /c
Description        Get specific book on category
Access             Public
Parameter          category
Methods            GET

*/

bookm.get("/c/:category", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );
    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the category of ${req.params.category}`});
    }

    return res.json({book: getSpecificBook});
});

/*

Route              /l
Description        Get specific book on language
Access             Public
Parameter          language
Methods            GET

*/

bookm.get("/l/:language", (req,res) => {
    const getAllBook = database.books.filter(
        (book) => book.language === req.params.language
    );
    if(getAllBook.length === 0) {
        return res.json({error: `No book found for language of ${req.params.language}`});
    }

    return res.json({book: getAllBook});
});

//BOOKS CLOSE ----------------------------- BOOKS CLOSE

//AUTHORS OPEN ----------------------------- AUTHORS OPEN

/*

Route              /auth
Description        Get the list of authors
Access             Public
Parameter          NONE
Methods            GET

*/

bookm.get("/auth",(req,res) => {
    return res.json({author: database.author});
});

/*

Route              /auth/id
Description        Get the specific authors
Access             Public
Parameter          id
Methods            GET

*/

bookm.get("/auth/:id",(req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.ID === parseInt(req.params.id)
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found for the ID of ${req.params.id}`});
    }

    return res.json({author: getSpecificAuthor})
});

/*

Route              /auth/book/isbn
Description        Get the list of authors based on particular book
Access             Public
Parameter          isbn
Methods            GET

*/

bookm.get("/auth/book/:isbn",(req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No author found for the book of ${req.params.isbn}`});
    }

    return res.json({authors: getSpecificAuthor})
});

//AUTHORS CLOSE ----------------------------- AUTHORS CLOSE


//PUBLICATION OPEN ----------------------------- PUBLICATION OPEN

/*

Route              /publications
Description        Get all the publications
Access             Public
Parameter          NONE
Methods            GET

*/

bookm.get("/publications", (req,res) => {
    return res.json({publications: database.publication});
});

/*

Route              /publications/id
Description        Get specific publication
Access             Public
Parameter          id
Methods            GET

*/

bookm.get("/publications/:id",(req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.ID === parseInt(req.params.id)
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No publication found for the ID of ${req.params.id}`});
    }

    return res.json({author: getSpecificPublication})
});

/*

Route              /publications/book/isbn
Description        Get the publication based on book
Access             Public
Parameter          isbn
Methods            GET

*/

bookm.get("/publications/book/:isbn",(req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.isbn)
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No publication found for the book of ${req.params.isbn}`});
    }

    return res.json({publications: getSpecificPublication})
});

//PUBLICATION CLOSE ----------------------------- PUBLICATION CLOSE

bookm.listen(3000, () => {
    console.log("Server is up and running");
});