const express = require("express");

const app = express();

app.use(express.json());
app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello form shopping" });
});

app.listen(8003, () => {
  console.log("shopping is running on port 8003");
});
