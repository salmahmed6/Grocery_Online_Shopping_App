const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:8001"));
app.use("/product", proxy("http://localhost:8002"));
app.use("/shopping", proxy("http://localhost:8003"));

app.listen(8006, () => {
  console.log("gateway is running on port 8006");
});
