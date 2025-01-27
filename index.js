const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 20202
app.use(express.static('public'))
const fs = require('node:fs');

server.listen(port)

const { Remarkable } = require('remarkable');
var md = new Remarkable();
 

const guideFolder = './guidesmd/';
const htmlpre = fs.readFileSync('htmltemplate-pre', 'utf8');
const htmlpost = fs.readFileSync('htmltemplate-post', 'utf8');
let contentLinks = []


let guideNames = fs.readdirSync(guideFolder);
guideNames.forEach(guidefn => {
    console.log(guidefn)
    const guideContent = fs.readFileSync(guideFolder + guidefn, 'utf8')
    const htmlData = htmlpre + md.render(guideContent) + htmlpost
    const outfn = guidefn.replace('.md', '.html')
    contentLinks.push(outfn)
    fs.writeFileSync('public/guides-html/' + outfn, htmlData)
})
console.log(contentLinks)
let linksHTML = ''
contentLinks.forEach(link => {
    linksHTML += "<a href='guides-html/" + link + "'>" + link + "</a><br>"
})
let newIndex = htmlpre + linksHTML + htmlpost
fs.writeFile('public/index.html', newIndex, err => {

});