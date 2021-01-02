
const fetch = require('node-fetch');

const getTest = (req, res) => {
    fetch('https://swapi.py4e.com/api/planets/1/')
        .then(response => response.json())
        .then(json => res.send(json))
        .catch(error => console.log(error));
};

module.exports = {
    getTest: getTest
};