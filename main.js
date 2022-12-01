const http = require("http");
const fs = require("fs").promises;
const path = require('path');

const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);


const port = 80;
const hostname = "localhost";

var indexFile;
var cssFile;
var register;
var login;

var resources = ["/index.html", "/css/style.css", "/register.html", "/login.html"];
var pages = [];
const requestListener = function (request, response) 
{
    response.setHeader("Content-Type", "application/json");
    switch (request.url) 
    {
        case "/books":
            {
                response.end(books);
                break;
            }
        case "/authors":
            {
                response.end(authors);
                break;
            }
        case "/":
            {
                response.setHeader("Content-type", "text/html");
                response.end(pages[0]);
                break;
            }
        case "/css/style.css":
            {
                response.setHeader("Content-type", "text/css");
                response.end(pages[1]);
                break;
            }
        case "/register":
            {
                response.setHeader("Content-type", "text/html");
                response.end(pages[2]);
                break;
            }
        case "/login":
            {
                response.setHeader("Content-type", "text/html");
                response.end(pages[3]);
                break;
            }
        case "/view":
            {
                response.setHeader("Content-type", "text/html");
                response.end(login);
                break;
            }
        default:
            response.writeHead(404);
            response.end(JSON.stringify({ error: "Resource not found" }));
    }
};
const server = http.createServer(requestListener);

let serveron = false;
for(var i = 0; i < resources.length; i++)
{
    fs.readFile(__dirname + resources[i])

    .then(contents => {
        pages.push(contents);
        if(!serveron)
        {
            server.listen(port, hostname, () => {
                console.log(`Server running on https://${hostname}:${port}`)
            });
            serveron = true;
        }
        
    })
    .catch(err => {
        console.error(`Could not read file ${err}`);
        process.exit(1);
    })
}

