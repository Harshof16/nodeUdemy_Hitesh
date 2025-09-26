const { error } = require("console");
const express = require("express");
const { appendFileSync } = require("fs");

// app smartly forward the requests to respective routes
const app = express();
const PORT = 8000;

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

// Middleware (plugin)
app.use(express.json());
//without this middleware, api was unable to fetch body of request, now if the headers is application/json in request, then it'll just save the incoming json data into req.body

//creating middleware to save in log file, will now log each request
app.use((req, res, next) => {
  const log = `\n[${Date.now()}]: ${req.method} ${req.path}`;
  appendFileSync("log.txt", log, "utf-8");
  next();
});

// route level middleware
function customMiddleware(req, res, next) {
    console.log("I'm a custom middlware.");
    next();
}

// path based middleware, work on any GET, POST, DELETE request if the path matches
app.use("/book", (req, res, next) => {
    console.log('path book middleware');
    next()
})

// can have here series of middlewares as well
app.get("/book", customMiddleware, (req, res) => {
  res.setHeader("lom", "di");
  res.json(books);
});

app.get("/book/:id", (req, res) => {
  console.log("params", req.params);
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: "id must be of type number" });

  const book = books.find((book) => id === book.id);
  if (!book)
    return res.status(404).json({ error: `Book with id${id} doesn't exist` });

  return res.json(book);
});

app.post("/createBook", (req, res) => {
  console.log(req.body);
  const { title, author } = req.body;
  if (!title || title.trim() === "")
    return res.status(404).json({ error: "title is required" });

  if (!author || author.trim() === "")
    return res.status(404).json({ error: "author is required" });

  const id = books.length + 1;
  const book = {id, title, author};
  books.push(book)
  
  return res.status(201).json({message: 'Book created succesfully', id});
});

app.delete("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id))
        return res.status(400).json(`id must be of type number`);

    const index = books.findIndex(book => id === book.id)
    if(index < 0)
        return res.status(404).json({error: `No book with ${id} found.`})

    books.splice(index, 1)
    return res.status(200).json({message : `Book deleted`})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
