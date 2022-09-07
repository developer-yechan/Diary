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

/**
 * @swagger
 * paths:
 *   /board:
 *    get:
 *      summary:  "익명게시판 전체 게시글 데이터 조회"
 *      description: "익명게시판 전체 게시글 데이터 조회"
 *      tags: [Board]
 *      parameters :
 *        - in : query
 *          name : offset
 *          required : true
 *          description : 게시글 read 기준점
 *          schema :
 *             type : number
 *      responses:
 *        "200":
 *          description: "익명게시판 전체 게시글 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                example:
 *                        [
 *                         {
 *                           "title": "사랑😀은 헷갈리게 하지 않아",
 *                           "weather": null,
 *                           "createdAt": "2022-09-06T12:06:59.000Z"
 *                          }
 *                        ]
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /board/{id}:
 *    get:
 *      summary:  "익명게시판 특정 게시글 데이터 조회"
 *      description: "익명게시판 특정 게시글 데이터 조회"
 *      tags: [Board]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 id
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "익명게시판 특정 게시글 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example:
 *                         {
 *                           "title": "진짜 날씨",
 *                           "weather": "//cdn.weatherapi.com/weather/64x64/day/116.png",
 *                           "password": "$2b$10$6W4wgcmMgJszgR7KnvkUm.nIvceljf7Ufvi3LesyRSH2jfKXCdLKa",
 *                           "content": "sunny",
 *                           "createdAt": "2022-09-07T01:55:11.000Z"
 *                          }
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /board:
 *    patch:
 *      summary:  "익명게시판 특정 게시글 데이터 수정"
 *      description: "익명게시판 특정 게시글 데이터 수정"
 *      tags: [Board]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 데이터 및 id,password
 *           schema :
 *              type : object
 *              example :
 *                {id : uuid, title : 수정할 제목, content : 수정할 내용 , password : "게시물 password"}
 *      responses:
 *        "204":
 *          description: "자유게시판 특정 게시글 데이터 수정 성공"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /board:
 *    post:
 *      summary:  "익명게시판 게시글 데이터 생성"
 *      description: "익명게시판 게시글 데이터 생성"
 *      tags: [Board]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 생성할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {title : 생성할 제목, content : 생성할 내용 , password : "게시물 password"}
 *      responses:
 *        "204":
 *          description: "익명게시판 게시글 데이터 생성 성공"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /board:
 *    delete:
 *      summary:  "익명게시판 특정 게시글 데이터 삭제"
 *      description: "익명게시판 특정 게시글 데이터 삭제"
 *      tags: [Board]
 *      parameters :
 *        - in : body
 *          name : data
 *          required : true
 *          description : 삭제할 데이터 id,password
 *          schema :
 *             type : object
 *             example :
 *                {id : uuid, password : "게시물 password"}
 *      responses:
 *        "204":
 *          description: "익명게시판 특정 게시글 데이터 삭제 성공"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */
