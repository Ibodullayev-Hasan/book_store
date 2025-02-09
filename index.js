const express = require("express");
let cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./src/Routes/indexRout");
require("dotenv/config");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server run 🚀 on port: ${port} `);
});
