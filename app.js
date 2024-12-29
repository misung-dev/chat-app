const express = require("express");
const mongoose = require("mongoose"); // 데이터베이스 연결을 위해
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors()); // 어떤 주소로든 접근을 허가함

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;
