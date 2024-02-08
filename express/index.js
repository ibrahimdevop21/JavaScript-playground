// !Ignore casing. The paths /Hello/ and /HELLO/ will match the /hello/ route unless you add app.set('case sensitive routing', true) to index.js.
// !Ignore closing slashes. The paths /hello/ and /hello match the same route unless you add app.set('strict routing', true) to index.js.
// Express application
import express from "express";
import compression from "compression";
import { fileURLToPath } from "url";
import { dirname, sep } from "path";

// express initiation
const app = express();

// Configuration
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;
const cfg = {
  port: process.env.PORT || 3000,
  dir: {
    root: __dirname,
    static: __dirname + "static" + sep,
    views: __dirname + "views" + sep,
  },
};

// HTTP compression
app.use(compression());

// Log every request to the terminal
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// Set up EJS template
app.set("view engine", "ejs");
app.set("views", cfg.dir.views);

// Home page route
app.get("/", (req, res) => {
  res.render("message", { title: "Hello World!" });
});

//! /hello/ route
import { helloRouter } from "./routes/hello.js";
app.use("/hello", helloRouter);

// Serve static assets
app.use(express.static(cfg.dir.static));

// 404 error
app.use((req, res) => {
  res.status(404).render("message", { title: "Not found" });
});

// Start server
app.listen(cfg.port, () => {
  console.log(`Example app listening at http://localhost:${cfg.port}`);
});

// Export defaults
export { cfg, app };
