const express = require("express");
const sequelize = require("./config/database");

//routes folder
const userRoutes = require("./routes/user");
const userQueryRoutes = require("./routes/userQuery");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//database connection
sequelize
  .authenticate()
  .then(() => {
    const port = process.env.PORT || 80;
    app.listen(port, () =>
      console.log(`server started...`));
    console.log("Connection has been established successfully.");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));


//routes
app.get("/", (req, res) => {
  const message = `welcome user`;
  res.json({ message });
});

app.use("/user", userRoutes);
app.use("/user-query", userQueryRoutes);
