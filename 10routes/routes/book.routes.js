const express = require('express');
const { getAllBooks, getBookById, createBook, deleteBookById } = require('../controllers/book.controllers');

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.delete("/:id", deleteBookById)

// default export
module.exports = router