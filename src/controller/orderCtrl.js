const { readFile, writeFile } = require("../utils/fs");

const getOrders = (req, res) => {
  let { id } = req.params;
  let bookFile = readFile("books");
  const product = readFile("books");
  let book_id = bookFile.find((el) => el.id === id * 1);

  if (book_id) {
    res.render("ordersPage", { book_id, product });
  } else {
    res.render("noteFound");
  }
};

const postOrder = (req, res) => {
  let { book_id, clientPhone, clientName, countOrder, adress } = req.body;

  let ordersFile = readFile("orders");
  let booksFile = readFile("books");

  let book = booksFile.find((el) => el.id == book_id);

  ordersFile.push({
    id: ordersFile.at(-1)?.id + 1 || 1,
    book,
    clientName,
    clientPhone,
    countOrder,
    adress,
  });
  // console.log();

  writeFile("orders", ordersFile);
  // console.log(writeFile());

  res.redirect("/");
};

module.exports = { getOrders, postOrder };
