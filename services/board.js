const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const createPost = async (req, res, next) => {
  try {
    const { title, content, password, weather } = req.body;
  } catch (err) {
    next(err);
  }
};

module.exports = { createPost };
