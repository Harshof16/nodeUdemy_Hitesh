const {books} = require('../db/book');

exports.getAllBooks = (req, res) => {
  res.json(books);
}

exports.getBookById = (req, res) => {
  console.log("params", req.params);
  const id = parseInt(req.params.id);

  if (isNaN(id))
    return res.status(400).json({ error: "id must be of type number" });

  const book = books.find((book) => id === book.id);
  if (!book)
    return res.status(404).json({ error: `Book with id${id} doesn't exist` });

  return res.json(book);
}

exports.createBook = (req, res) => {
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
}

exports.deleteBookById = (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id))
        return res.status(400).json(`id must be of type number`);

    const index = books.findIndex(book => id === book.id)
    if(index < 0)
        return res.status(404).json({error: `No book with ${id} found.`})

    books.splice(index, 1)
    return res.status(200).json({message : `Book deleted`})
}