require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db.config");

connectDb();

const app = express();
app.use(express.json());

app.use("/work", require("./routes/work.routes"));
app.use("/what", require("./routes/what.routes"));
app.use("/differential", require("./routes/differential.routes.js"));
app.use("/team", require("./routes/team.routes.js"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
