const express = require("express");
const fs = require('fs');

const {logReqRes} = require("./middlewares");

const{connectMongoDb} = require("./connection");

const userRouter = require('./routes/user')

const app = express();
const PORT = 8000;

connectMongoDb("mongodb://127.0.0.1:27017/learn-1").then(() => console.log("MongoDb connected!"));

app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`))