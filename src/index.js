var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  const url = req.url;
  if (url === "/") {
    res.writeHead(404);
    res.end();
  }
  if (url === "/welcome") {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("Welcome to Dominos!");
  }
  if (url === "/contact") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{phone: '18602100000',email: 'guestcaredominos@jublfood.com'}`);
  }
}

httpServer.listen(8081, () => {});
module.exports = httpServer;
