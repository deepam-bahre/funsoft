const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const customerRouter = require("./routes/customerRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;

app.use("/user", userRouter);
app.use("/customer", customerRouter);


app.listen(port, () => console.log(`fansoft server at : ${port}`));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to db successfully"))
  .catch((err) => console.log(err));
