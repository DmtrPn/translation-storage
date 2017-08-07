const fs = require('fs');

const text = fs.readFileSync('./data/translations.json', 'utf8');
const newData = {
    id: "Второй перевод",
    values: {
        ru: "Мой второй перевод",
        en: "english",
        zn: "kitay",
        hi: "indiya",
        sp: "ispaniya",
        pt: "portygaliya"
    }
};
// const text = fs.readFileSync('./data/translations.json', 'utf8');
const tr = JSON.parse(text);

tr.translations.push(newData);
console.log(tr);
fs.writeFileSync('./data/translations1.json', JSON.stringify(tr), 'utf8');

// tr.push(newData);

// console.log(JSON.parse(text));
