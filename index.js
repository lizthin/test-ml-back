const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');
const routes = require('./src/routes/index.routes');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(config.PORT, () => {
    console.log(`Server ONLINE Port: http://localhost:${config.PORT}`);
});

