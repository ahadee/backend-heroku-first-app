const express = require("express");
const router = express.Router();
// const users = require("../../models/users");\

const {filterByAddress,findByID} = require("./controller")

router.get('/', require("./controller").getAll)
// router.get('/', require("./controller").addUser)
router.post('/', require("./controller").addUser)
router.put('/:id', require("./controller").editUser)
router.get('/filterByAddress',filterByAddress)
// router.get('/findByID',findByID)
router.get('/:id', require("./controller").findByID)
router.delete('/:id', require("./controller").deleteByID)
router.delete('/', require("./controller").deleteAll)
module.exports = router;
