'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

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

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));