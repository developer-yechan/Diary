const express = require("express");
const router = express();
const boardRouter = require("./board.js");

router.use(boardRouter);
module.exports = router;
