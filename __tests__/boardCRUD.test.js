const request = require("supertest");
const app = require("../app");
const password = "abcde0";
const postId = "56a2467e-9c80-4ede-b5c2-cfc5089ff0ba";

describe("익명 게시판 CRUD", () => {
  it("익명게시판 글 등록", (done) => {
    request(app)
      .post("/post")
      .send({
        title: "익명 게시판 글 등록",
        content: "익명 게시판 글 등록 내용",
        password: "abcde0",
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect(201, done);
  });

  it("익명게시판 모든 글 조회", (done) => {
    request(app)
      .get("/post?offset=0")
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });

  it("익명게시판 특정 글 조회", (done) => {
    request(app)
      .get(`/post/${postId}`)
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });

  it("익명게시판 글 수정", (done) => {
    request(app)
      .patch("/post")
      .send({
        id: postId,
        title: "운영게시판 글 등록 수정본",
        content: "운영게시판 글 등록 내용 수정본",
        password,
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });

  it("익명게시판 글 삭제", (done) => {
    request(app)
      .delete("/post")
      .send({
        id: postId,
        password,
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });
});
