const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const boardRepo = require("../repos/board");
const bcrypt = require("bcrypt");

const createPost = async (req, res, next) => {
  try {
    const { title, content, password, weather } = req.body;
    const postDto = {
      title,
      content,
      password: await bcrypt.hash(password, 10),
      weather,
    };
    const post = await boardRepo.createPost(postDto);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = { createPost };
