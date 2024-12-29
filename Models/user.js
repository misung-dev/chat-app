const mongoose = require("mongoose");

// Schema? 데이터의 설계도와 같음. 내가 받을 데이터가 이렇게 생겼다라는 것을 설명
// 유저이름, token(이름, 연결 id 정보), online(온/오프라인의 상태를 보여줌)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },
  token: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("User", userSchema);
