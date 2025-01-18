const express = require("express");
let cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./Routes/indexRout");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "src", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(9000, () => {
  console.log(`Server run 🚀 `);
});
