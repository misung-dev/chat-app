const { createServer } = require("http"); // http를 통해서 서버 만들기
const app = require("./app"); // apps 들고오기
const { Server } = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app); // 데이터베이스 연결부분을 올림
const io = new Server(httpServer, {
  cors: {
    // 아무나 들어오라고 허락할 수 없으므로, 허락하는 Http의 로컬 호스트만 허용
    origin: "http://localhost:3000", //  프론트엔드 주소를 넣음
  },
});

require("./utils/io")(io);
httpServer.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
