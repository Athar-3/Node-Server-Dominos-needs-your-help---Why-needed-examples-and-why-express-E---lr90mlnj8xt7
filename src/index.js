// var http = require("http");

// const httpServer = http.createServer(handleServer);

// function handleServer(req, res) {
//   const url = req.url;
//   if (url === "/") {
//     res.writeHead(404);
//     res.end();
//   }
//   if (url === "/welcome") {
//     res.setHeader("Content-Type", "text/plain");
//     res.writeHead(200);
//     res.end("Welcome to Dominos!");
//   }
//   if (url === "/contact") {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end({
//         "phone": '18602100000',
//         "email": 'guestcaredominos@jublfood.com'
//       }
//       );
//   }
// }

// httpServer.listen(8081, () => {});
// module.exports = httpServer;

const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
  res.status(200).send("Welcome to Dominos!")
})

app.get('/contact', (req, res) => {
  res.status(200).json({
    "phone": '18602100000',
    "email": 'guestcaredominos@jublfood.com'
  })
})

app.all("/*", (req, res) => {
  res.sendStatus(404);
})

app.listen(8081, () => console.log("server is running"))