const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/auth");
const { auth } = require("../middleware/auth");
const { register } = require("../controllers/pharmacy");

const { create } = require("../controllers/medicine");
const { updatemed } = require("../controllers/medicine");
const { delmed } = require("../controllers/medicine");
const { show } = require("../controllers/list");
const { search } = require("../controllers/list");

router.get("/show", show);
router.get("/search", search);

router.post("/signup", signup);
router.get("/login", login);
router.post("/register", register);

router.post("/create", create);
router.post("/update", updatemed);
router.delete("/delete", delmed);

module.exports = router;
