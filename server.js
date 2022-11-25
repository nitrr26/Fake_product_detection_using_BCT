const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname ,"public","home2.html"));
})
const  server = app.listen(4000);
const portNumber = server.address().port;
console.log("server: "+ portNumber);