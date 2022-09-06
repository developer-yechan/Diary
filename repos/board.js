const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const createPost = async (title, content, password, weather) => {
  const post = await models.board.create({
    id: uuidv4(),
    title,
    content,
    password,
    weather,
  });
  return post;
};

module.exports = { createPost };
