const express = require("express");
const router = express();
const boardService = require("../services/board");

router.post("/post", boardService.createPost);
module.exports = router;
