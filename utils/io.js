const userController = require("../Controllers/user.controller");

// io 관련 모든 작업
module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      // 로그인을 들었을때 하고 싶은 말
      console.log("backend", userName);
      // 여기서의 로그인: 받은 유저정보를 저장하고 소켓 아이디 정보도 저장
      // 유저정보를 저장
      try {
        const user = await userController.saveUser(userName, socket.id);
        cb({ ok: true, data: user });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
