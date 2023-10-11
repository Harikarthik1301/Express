const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 7777;

app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});

app.get("/hello(.html)?",(req,res,next)=>{
     console.log("entering to hello.html");
     next()
},(req, res) => {
    res.sendFile(path.join(__dirname, "views", "hello.html"));
  });

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});



app.listen(PORT, () => {
  console.log(`sever is running on port : ${PORT}`);
});
