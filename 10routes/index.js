const express = require("express");

const { loggerMiddleware } = require("./middlewares/logger");
const bookRouter = require('./routes/book.routes');

const app = express();
const PORT = 8000;

// Registering middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Registering routes
// app basically routing to /book
app.use('/book', bookRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
