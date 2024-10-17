const express = require('express');

const bodyParser = require('body-parser');

const users = require('./users');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
