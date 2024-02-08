const port = process.argv[2] || process.env.PORT || 3000;
const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);

    // Extract name from the URL, sanitize, and capitalize
    const nameArg = capitalize(
      req.url
        .replace(/[^\w.,-]/g, " ")
        .replace(/\s+/g, " ")
        .trim() || "world"
    );

    // Set up the response
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Hello ${nameArg}!</h1>`);
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}/`);

// Capitalize the first letter of all words
function capitalize(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
