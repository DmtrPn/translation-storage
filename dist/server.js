'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');


const DATA_PATH = '../data/translations.json';

const fileData = fs.readFileSync(path.join(__dirname, DATA_PATH), 'utf8');


let translationsData = JSON.parse(fileData);
let translationsCount = translationsData.length;

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/translations', (req, res) => {
    const data = {};
    data.translations = _.reduce(translationsData, function(acc, element) {
        acc.push({
            id: element.id,
            key: element.key
        });
        return acc;
    }, []);
    data.count = translationsCount;
    res.send(data);
});

app.get('/api/translations/:id', (req, res) => {
    const translation = _.filter(translationsData, function(translation) {
        return translation.id == req.params.id;
    });
    res.send(translation[0]);
});

app.put('/api/translations/:id', (req, res) => {
    const translation = _.filter(translationsData, function(translation) {
        return translation.id == req.params.id;
    });

    if (!translation) return res.sendStatus(404);
    translation[0].values = req.body.values || translation.values;
    fs.writeFileSync(path.join(__dirname, DATA_PATH), JSON.stringify(translationsData), 'utf8');
    res.json(translation[0]);
});

app.get('*', (req, res) => {
    const staticPath = path.join(__dirname, '../public/index.html');
    fs.readFile(staticPath, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));