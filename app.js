const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 8081

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./config/db')(app);
require('./routes/index')(app);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
