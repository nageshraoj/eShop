const express = require("express");
const dotenv = require("dotenv");
const { connectMongo } = require("./config/db");
const { userRoute } = require("./routes/userRoute");

const app = express();
dotenv.config({ path: "src/config/config.env" });
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

connectMongo();
app.use(express.json());

app.use("/api/user", userRoute);
