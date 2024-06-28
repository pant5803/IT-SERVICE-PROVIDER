require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectdb = require("./utils/db");
const cors = require("cors"); // import cors

// cors error handling
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

/// import error middleware
const { errmiddleware } = require("./middlewares/errmiddleware");

app.use(express.json());
app.use("/", router);

app.use(errmiddleware); // use error middle ware

connectdb().then(() => {
  const PORT = 3000;
  app.listen(PORT);
});
