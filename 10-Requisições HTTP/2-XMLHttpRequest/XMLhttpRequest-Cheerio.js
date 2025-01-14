const xhr = require('xmlhttprequest').XMLHttpRequest;
const cheerio = require('cheerio')

let request = new xhr();

request.open('GET', 'https://hermenegildowilson.github.io/exemplo/', false)

request.send(null)
const html = request.responseText

const $ = cheerio.load(html)

$('div').each((index, element) => {
    console.log($(element).text())
})
