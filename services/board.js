const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const boardRepo = require("../repos/board");
const bcrypt = require("bcrypt");
const errorCodes = require("../codes/errorCodes");

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
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

const readPosts = async (req, res, next) => {
  try {
    const offset = Number(req.query.offset);
    const posts = await boardRepo.findPosts(offset);
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const readPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await boardRepo.findPost(postId);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { title, content, weather } = req.body;
    const updateDto = {
      id: req.id,
      title,
      content,
      weather,
    };
    const updatedPost = await boardRepo.updatePost(updateDto);
    if (updatedPost[0] === 0) {
      throw new Error("내용이 변경되지 않았습니다.");
    }
    return res
      .status(204)
      .json({ message: "수정 내용이 성공적으로 반영됐습니다." });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const deletePost = await boardRepo.deletePost(req.id);
    if (deletePost[0] === 0) {
      throw new Error("내용이 변경되지 않았습니다.");
    }
    return res.status(204).json({ message: "포스팅이 삭제 됐습니다." });
  } catch (err) {
    next(err);
  }
};

module.exports = { createPost, readPosts, readPost, updatePost, deletePost };
