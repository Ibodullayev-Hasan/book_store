const { readFile, writeFile } = require("../utils/fs");

const getAuthor = (req, res) => {
  res.render("admin");
};

const creatAuthors = (req, res) => {
  let { fullname } = req.body;
  let authorFile = readFile("author");
  
  
    
  authorFile.push({
    id: authorFile.at(-1)?.id + 1 || 1,
    fullname,
  });
  
  writeFile("author", authorFile);
  res.redirect("/admin");
};

module.exports = { getAuthor, creatAuthors };
