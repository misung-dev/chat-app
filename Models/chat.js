const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chat: String, // 메세지 내용
    user: {
      // 메세지 보내는 이의 정보
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      name: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
