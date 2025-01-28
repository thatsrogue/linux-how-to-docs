const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 20203
app.use(express.static('public'))
const fs = require('node:fs');

server.listen(port)
console.log('Server running on port: ', port)

const { Remarkable } = require('remarkable');
var md = new Remarkable();


const guideFolder = './guidesmd/';
const htmlpre = fs.readFileSync('htmltemplate-pre', 'utf8');
const htmlpost = fs.readFileSync('htmltemplate-post', 'utf8');
let contentLinks = []


let guideNames = fs.readdirSync(guideFolder);
guideNames.forEach(guidefn => {
    console.log('Converting', guidefn)
    const guideContent = fs.readFileSync(guideFolder + guidefn, 'utf8')
    const htmlData = htmlpre + md.render(guideContent) + htmlpost
    const outfn = guidefn.replace('.md', '.html')
    contentLinks.push(outfn)
    fs.writeFileSync('public/guides-html/' + outfn, htmlData)
})
let linksHTML = ''
contentLinks.forEach(link => {
    linksHTML += "<a href='guides-html/" + link + "' class='guidelink'>" + link.slice(0, -5) + "</a><br>\n"
})
let newIndex = htmlpre + '<h1>Linux How-To Guides</h1>\n' + linksHTML + htmlpost
fs.writeFile('public/index.html', newIndex, err => {

});