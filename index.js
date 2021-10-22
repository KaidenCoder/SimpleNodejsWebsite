const express = require('express')
const fs = require('fs')
// We can write text file and store in our computer using fs module

const app = express()

app.use(express.static('public'))

app.listen(3000)

let content = 'Hello world, I am writing a text and changed it'
fs.writeFile('./blog.txt', content, () => {
    console.log('Text is written')
})

fs.writeFile('./blog1.txt', 'Second content for blogs2', () => {
    console.log('Text is written')
})


console.log(__dirname)
app.get('/', (req, res) => {
    res.sendFile('./views/home.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile("./views/about.html", {root: __dirname})
})


app.get('/gallery', (req, res) => {
    res.sendFile("./views/gallery.html", {root: __dirname})
})



