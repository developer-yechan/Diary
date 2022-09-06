const boardRepo = require("../repos/board");
const bcrypt = require("bcrypt");
const errorCodes = require("../codes/errorCodes");

const passwordRequired = async (req, res, next) => {
  try {
    const { id, password } = req.body;
    const post = await boardRepo.findPost(id);
    if (!post) {
      return res.status(400).json({ message: "존재하지 않는 포스팅입니다." });
    }
    const comparePassword = await bcrypt.compare(password, post.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
    }
    req.id = id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = passwordRequired;
