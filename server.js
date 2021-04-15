const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

const port = 9000;
app.listen(process.env.PORT || port, () => {
    console.log("Success! Server is running on port ", PORT)
})