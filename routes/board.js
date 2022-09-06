const express = require("express");
const router = express();
const boardService = require("../services/board");
const { boardValidator } = require("../middlewares/validator/boardValidator");

router.post("/post", boardValidator(), boardService.createPost);
router.get("/post", boardService.readPosts);
router.get("/post/:id", boardService.readPost);
module.exports = router;
