const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.
    res.end('Homepage')
})

app.get('/contact-us', (req, res) => {
    res.end('you can contact me at my email address')
})

app.get('/tweets', (req, res) => {
    res.end('Here are your tweets')
})

app.post('/tweets', (req, res) => {
    res.status(201).end('Tweet created success')
})

app.listen(8000, () => console.log(`Server is running on PORT 8000`))