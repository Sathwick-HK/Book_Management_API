const books = [
    {
        ISBN: "12345Book",
        title: "Tesla!!!",
        publication_date: "2023-05-12",
        language: "en",
        no_page: 250,
        author: [1,2],
        publication: [1],
        category: ["tech","space","education"]
    },
    {
        ISBN: "secretsanta",
        title: "Gifts",
        publication_date: "2023-07-15",
        language: "en",
        no_page: 100,
        author: [1],
        publication: [2],
        category: ["entertainment"]
    }

]

const author = [
    {
        ID: 1,
        name: "Gaurav",
        books: ["12345Book", "secretsanta"]
    },
    {
        ID: 2,
        name: "Elon Musk",
        books: ["12345Book"]
    }
]

const publication = [
    {
        ID: 1,
        name: "writex",
        books: ["12345Book"]
    },
    {
        ID: 2,
        name: "writesonic",
        books: ["secretsanta"]
    }
]


module.exports = {books,author,publication};