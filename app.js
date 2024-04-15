const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-
www-form-urlencoded
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});
app.post('/submit-form', (req, res) => {
    const name = req.body.name; 
    const email = req.body.email;
    const message = req.body.message;
    // access form data
    // did my validation in my contact form
res.send(`Name is ${name}`);
res.send(`Email is ${email}`);
res.send(`Message is ${message}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});