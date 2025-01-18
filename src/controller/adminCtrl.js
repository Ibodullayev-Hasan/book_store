const { readFile, writeFile } = require("../utils/fs");

const getAdmin = (req, res) => {
  let bookFile = readFile("books");
  const orderFile = readFile("orders");
  // console.log(orderFile);
  
  let authorFile = readFile("author");
  let categoryFile = readFile("categorys")
  
  res.render("admin", { bookFile, orderFile, authorFile, categoryFile });
  
};


const creatBook = (req, res) => {
  let { title, count, price, authorId, categorysId, img, desc } = req.body;
  let bookFile = readFile("books");
  
  bookFile.push({
    id: bookFile.at(-1)?.id + 1 || 1,
    title,
    count,
    price,
    authorId,
    categorysId,
    img,
    desc,
  });
  
  writeFile("books", bookFile);
  res.redirect("/admin");
};



const creatCateg = (req, res) => {
    let categoryFile = readFile("categorys")
    let {name} = req.body
     
    categoryFile.push({
        id: categoryFile.at(-1)?.id + 1 || 1,
       name
       
      });

      writeFile("categorys", categoryFile);
      res.redirect("/admin")
}
module.exports = { getAdmin, creatBook, creatCateg};
