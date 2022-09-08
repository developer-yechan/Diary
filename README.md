# 🔗목차
[Diary Service](#-Diary Service)

[요구사항 분석](#-요구사항-분석)

[API 문서](#-api-문서)

[테스트 케이스](#-테스트-케이스)

[컨벤션](#-컨벤션)

[ERD](#-erd)

[폴더 구조](#-폴더-구조)

[패키지](#-패키지)

[기술 스택](#-기술-스택)

[트러블 슈팅](#-트러블-슈팅)

# 🚩 Diary Service 

**이모지 사용이 가능하고 날씨 정보가 자동 저장 되는 Diary Service**

### ✔ 기능 설명


- 일기를 작성, 조회, 수정, 삭제 할 수 있습니다.
- 일기를 작성할 때는 비밀번호를 입력해야 합니다.
- 일기를 수정하거나 삭제하려면 일기를 작성할 때 등록한 비밀번호를 입력 해야합니다.
- 일기의 제목과 본문에는 이모지가 포함될 수 있습니다.

# ✅ 요구사항 분석

### ✔ 일기 API 개발
- 제목은 최대 20 자, 본문은 200 자로 서버에서 제한했습니다.
- 제목과 본문 모두 이모지가 포함될 수 있게 했습니다.
- 사용자는 회원가입,로그인 없이 게시글을 올릴 수 있지만 보안을 위해 게시글을 올릴 때 비밀번호를 설정하게 했습니다. 
- 사용자가 등록한 비밀번호와 입력한 비밀번호가 일치하면 수정, 삭제 가능하게 했습니다.
- 비밀번호는 데이터베이스에 암호화 된 형태로 저장이 되게 했습니다.
- 비밀번호는 6 자 이상에 숫자 1 개 이상 반드시 포함 하도록 했습니다.
- 모든 사용자는 한 페이지 내에서 모든 게시글을 최신 글 순서로 확인할 수 있게 했습니다.
-> 게시글의 개수가 많을 때, 사용자가 앱이나 웹에서 스크롤을 내릴 때마다 클라이언트가 display할 게시물의 offset을 쿼리로 보내주어 오래된 글들이 20개씩 계속 로드 되게 수정 했습니다.(추가 요구사항)
- Real-time Weather API를 사용해 사용자가 게시글을 업로드할 때 업로드한 시점의 날씨 정보가 게시글에 포함되도록 했습니다.
    
# 📑 API 문서
1) npm start로 서버 구동 -> localhost/{port}/api-docs

2) [diary_api_swagger.pdf](https://github.com/developer-yechan/Anonymous-Forum/files/9522948/diary_api_swagger.pdf)


# 📜 테스트 케이스

- unitTest는 mocha와 supertest로 진행했습니다.

- 일기 CRUD 테스트 완료했습니다.
![createTest](https://user-images.githubusercontent.com/99064214/189015971-d01cf908-7d9b-40c0-93ba-bb8e61d1dba2.png)
![findAll_test](https://user-images.githubusercontent.com/99064214/189015982-d9e297d7-a7fa-4c8e-9cbd-5708755c7b99.png)
![find_update_delete_test](https://user-images.githubusercontent.com/99064214/189015987-7a7aad3d-0bf8-4512-8be9-dd770a57a8e0.png)


# 💡 컨벤션

### ✔ camelCase / PascalCase

- **파일, 생성자, 변수, 메서드명**은 **camelCase**를 사용합니다.
- **클래스명**은 **PascalCase**를 사용합니다.

### ✔ Lint 규칙

| 들여쓰기 2칸 | 탭 사용 x |
| --- | --- |
| double quote 사용. | commonJS 사용 |
| 마지막 콤마 사용 | 한줄 최대 글자수: 80 |
| var는 사용하지 않습니다. | 세미 콜론 사용을 허용합니다. |

### ✔ 메서드명 규칙

- 전체조회는 복수형으로 작성합니다.

| 요청 내용  | service | repo |
| --- |--- | --- |
| 생성 | createPost | createPost |
| 조회 | readPost | findPost |
| 전체조회 | readPosts | findPosts |
| 수정 | updatePost | updatePost |
| 삭제 | deletePost | deletePost |

### ✔ 주석

- 메서드 및 코드 설명을 주석으로 간단하게 작성합니다.

### ✔ Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[깃 커밋 컨벤션 참고 사이트](https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기)

# 🗝 ERD
![image](https://user-images.githubusercontent.com/99064214/189023928-7ccc613d-394f-4b3c-9ee8-1d90123b2d8e.png)

# 🗂 폴더 구조
![image](https://user-images.githubusercontent.com/99064214/189024085-780f156e-1beb-46be-91d4-6a4159d47785.png)


# ⚙ 패키지

```json
{
  "name": "anonymous-forum",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "npx cross-env NODE_ENV=test mocha __tests__/*.test.js",
    "start": "nodemon server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/developer-yechan/Anonymous-Forum.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/developer-yechan/Anonymous-Forum/issues"
  },
  "homepage": "https://github.com/developer-yechan/Anonymous-Forum#readme",
  "dependencies": {
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "morgan": "^1.10.0",
    "mysql2": "^2.3.3",
    "sequelize": "^6.21.4",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.9",
    "dotenv": "^16.0.2",
    "eslint": "^8.23.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "jest": "^29.0.2",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "prettier": "^2.7.1",
    "sequelize-cli": "^6.4.1",
    "supertest": "^6.2.4",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.5.0"
  }
}

```

# ⚡ 기술 스택
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-FCC624?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-61DAFB?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Mocha-F8DC75?style=for-the-badge&logo=Mocha&logoColor=white">

# ✋ 트러블 슈팅

| 이슈 / 해결과정 |
| --- | --- | --- |
- 비밀번호 조건으로 6자 이상 하나 이상의 숫자 포함이 있었는데 정규식이 익숙치 않아 공부하고 적용하느라 시간이 걸렸지만 구현했습니다.
- 테스트 케이스 작성이 처음이라 해맸지만 같이 프리 온보딩 코스를 진행하는 팀원들의 도움으로 해결했습니다.
- 에러핸들러 함수를 미들웨어로 적용하여 에러 처리를 해주었지만 아직 완벽하게 모든 에러를 잘 핸들링 해주지는 못하고 있어  보완할 에정입니다.
