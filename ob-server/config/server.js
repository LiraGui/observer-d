require('dotenv').config();
let express = require('express');
const app = express();
const port = process.env['PORT'];
const cors = require('cors');
let bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
  console.log(`Server running on port ${port}`)
})

module.exports = {
  app,
}

