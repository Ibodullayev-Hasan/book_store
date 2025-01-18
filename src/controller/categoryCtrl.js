const { readFile } = require("../utils/fs")

const getCateg = (req, res) => {
    let categFile  = readFile("categorys")
    res.render("admin", {categFile})
}

module.exports = {getCateg}