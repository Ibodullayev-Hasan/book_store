const { readFile } = require("../utils/fs");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
  const adminFile = readFile("admin");
  let token = req.cookies.myAccess_token;

  const verifyUser = verify(token);
  const checkUser = adminFile.find((el) => el.id === verifyUser.id);

  if (checkUser) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = verifyToken;
