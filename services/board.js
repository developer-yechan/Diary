const models = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const boardRepo = require("../repos/board");
const bcrypt = require("bcrypt");
const errorCodes = require("../codes/errorCodes");
const axios = require("axios");

const createPost = async (req, res, next) => {
  try {
    const { title, content, password } = req.body;
    const weather = await getWeather();
    const weatherIcon = weather.data.current.condition.icon;
    const postDto = {
      title,
      content,
      password: await bcrypt.hash(password, 10),
      weather: weatherIcon,
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
    if (isNaN(offset)) {
      throw new Error("offset 값은 숫자여야 합니다.");
    }
    console.log(offset, 234234);
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
      .status(200)
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
    return res.status(200).json({ message: "포스팅이 삭제 됐습니다." });
  } catch (err) {
    next(err);
  }
};

const getWeather = async () => {
  const apiKey = "1853b3040cc447e091114348220609";
  const location = "Seoul";
  const requestUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  const result = await axios({
    method: "GET",
    url: requestUrl,
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  return result;
};

module.exports = { createPost, readPosts, readPost, updatePost, deletePost };
