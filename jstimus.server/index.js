const path = require('path');
const config = require('config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes.js');

const publicDir = path.join(__dirname, 'public');
if (config.get('debug')) {
    console.log(publicDir);
}

const app = express();

app.use(express.static(publicDir));
// app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

routes(app);

app.use((_req, res, _next) => {
    console.error('Ошибка');
    res.sendStatus(500);
});


const port = config.get('port');
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
