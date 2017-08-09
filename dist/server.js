const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const db = require('../db/db');

const DBConfig = require('../config/database-config');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(routes);

app.get('*', (req, res) => {
    const staticPath = path.join(__dirname, '../public/index.html');
    fs.readFile(staticPath, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

db.connect(`${DBConfig.path}:${DBConfig.port}/${DBConfig.name}`,
    function(err) {
        if (err) {
            return console.log(err);
        }
        app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));
    }
);
