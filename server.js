const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

const PORT = 9000;
app.listen(PORT, (req, res) => {
    console.log("Success! Server is running on port ", PORT)
})