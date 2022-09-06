const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const createPost = async (postDto) => {
  const post = await models.board.create({
    id: uuidv4(),
    title: postDto.title,
    content: postDto.content,
    password: postDto.password,
    weather: postDto.weather,
  });
  return post;
};

module.exports = { createPost };
