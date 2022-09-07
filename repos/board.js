const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const { notExistingPost } = require("../codes/errorCodes");

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

const findPosts = async (offset) => {
  const posts = await models.board.findAll({
    attributes: ["title", "weather", "createdAt"],
    offset,
    limit: 20,
    order: [["createdAt", "DESC"]],
  });
  return posts;
};

const findPost = async (id) => {
  const posts = await models.board.findOne({
    attributes: ["title", "weather", "password", "content", "createdAt"],
    where: {
      id,
    },
  });
  return posts;
};

const updatePost = async (postDto) => {
  const posts = await models.board.update(
    {
      title: postDto.title,
      content: postDto.content,
      password: postDto.password,
      weather: postDto.weather,
    },
    {
      where: {
        id: postDto.id,
      },
    }
  );
  return posts;
};

const deletePost = async (id) => {
  const result = await models.board.destroy({ where: { id } });
  return result;
};

module.exports = { createPost, findPosts, findPost, updatePost, deletePost };
