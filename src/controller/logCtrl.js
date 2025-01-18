const { readFile } = require("../utils/fs");
const { signIn } = require("../utils/jwt");

const getLogin = (req, res) => {
    res.render("login")
}


const postLogin = (req, res) => {
    const { username, password } = req.body;
    const adminFile = readFile("admin");
    let user = adminFile.find(
      (el) => el.username === username && el.password === password
    );
  
    if (user) {
      let token = signIn({ id: user.id });
      res.cookie("myAccess_token", token);
      res.redirect("/admin");
    } else {
      res.redirect("/login");
    }
    
}
module.exports = {getLogin,postLogin}