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

const readPosts = async () => {
  const posts = await models.board.findAll({
    attributes: ["title", "weather", "createdAt"],
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

const readPost = async (id) => {
  const posts = await models.board.findAll({
    attributes: ["title", "weather", "content", "createdAt"],
    where: {
      id,
    },
  });
  return posts;
};

module.exports = { createPost, readPosts, readPost };
