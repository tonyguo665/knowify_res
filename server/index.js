const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./route');
const path = require('path');
const db = require('./models/db');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api',router);
app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`App listening on port ${port}!`))