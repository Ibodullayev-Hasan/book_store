const {Router} = require("express")
const { getHome } = require("../controller/homeCtrl")
const { getLogin, postLogin } = require("../controller/logCtrl")
const { getAdmin, creatBook, creatCateg} = require("../controller/adminCtrl")
const verifyToken = require("../middleware/verifyToken")
const { getOrders, postOrder } = require("../controller/orderCtrl")
const { getCateg } = require("../controller/categoryCtrl")
const { creatAuthors, getAuthor } = require("../controller/aftorCtrl")

const router = Router()

router.get ("/", getHome)
router.get ("/login", getLogin)
router.get ("/admin", verifyToken, getAdmin)
router.get ("/order/:id", getOrders)
router.get ("/admin", getAuthor)
router.get ("/categorys", getCateg)
router.post("/create/book", creatBook)
router.post("/admin/creat", postLogin)
router.post ("/order/post", postOrder)
router.post ("/creat/authors", creatAuthors)
router.post ("/creat/categ", creatCateg)

module.exports = router