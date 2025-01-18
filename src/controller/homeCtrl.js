const { readFile } = require("../utils/fs");

const getHome = (req, res) => {
  let booksFile = readFile("books")

  res.render("home", { booksFile });
};

module.exports = { getHome };
