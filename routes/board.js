const express = require("express");
const router = express();
const boardService = require("../services/board");
const boardValidator = require("../middlewares/validator/boardValidator");
const passwordRequired = require("../middlewares/passwordRequired");

router.post("/post", boardValidator(), boardService.createPost);
router.get("/post", boardService.readPosts);
router.get("/post/:id", boardService.readPost);
router.patch("/post", passwordRequired, boardService.updatePost);
router.delete("/post", passwordRequired, boardService.deletePost);
module.exports = router;
