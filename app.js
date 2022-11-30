const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/UserRoute");
 
//middleware
app.use(express.json());
app.use("/api/users", userRoute);
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ force: false, alter: true });
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;