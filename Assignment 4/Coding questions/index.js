const {resolve} = require("path");
const fs = require("fs");
const express = require("express");

const usersPath = resolve("./users.json");
const users = JSON.parse(fs.readFileSync(usersPath));

const port = 3000;
const app = express();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.json());
// ----------------------------------------------------------------------
// GET All Users
app.get("/user", (req, res, next) => {
  res.status(200).json({
    users,
  });
});
// ----------------------------------------------------------------------
// GET User By Name
app.get("/user/getByName", (req, res, next) => {
  const {name} = req.query;
  const user = users.find((user) => {
    if (user.name === name) {
      return user;
    }
  });
  if (!user) {
    return res.status(404).json({
      message: "User Name Not Found",
    });
  }
  res.status(200).json({
    message: "Success",
    user,
  });
});
// ----------------------------------------------------------------------
// GET Users By Minimum Age

app.get("/user/filter", (req, res, next) => {
  const {minAge} = req.query;
  const user = users.filter((user) => {
    if (user.age > Number(minAge)) {
      return user;
    }
  });

  if (user.length === 0) {
    return res.status(404).json({
      message: "No User Found",
    });
  }
  res.status(200).json({
    message: "Success",
    user,
  });
});
// ----------------------------------------------------------------------
// GET User BY ID
app.get("/user/:id", (req, res, next) => {
  const {id} = req.params;

  const user = users.find((user) => {
    if (user.id === Number(id)) {
      return user;
    }
  });
  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  res.status(200).json({
    message: "Success",
    user,
  });
});
// ----------------------------------------------------------------------
// Delete User By ID
app.delete("/user/:id", (req, res, next) => {
  const {id} = req.params;
  const userIndex = users.findIndex((user) => {
    if (user.id === Number(id)) {
      return user;
    }
  });

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User ID Not Found",
    });
  }

  users.splice(userIndex, 1);
  fs.writeFileSync(usersPath, JSON.stringify(users));

  res.status(200).json({
    message: "User Deleted Successfully",
  });
});
// ----------------------------------------------------------------------
// Update User Data By ID

app.patch("/user/:id", (req, res, next) => {
  const {id} = req.params;
  const {age} = req.body;
  console.log(id);
  console.log(req.body);

  const user = users.find((user) => {
    if (user.id === Number(id)) {
      user.age = age;
      return user;
    }
  });
  console.log(user);

  if (!user) {
    return res.status(404).json({
      message: "User ID Not Found",
    });
  }
  fs.writeFileSync(usersPath, JSON.stringify(users));

  res.status(200).json({
    message: "User Age Updated Successfully",
    user,
  });
});
// ----------------------------------------------------------------------
// Add New User
app.post("/user", (req, res, next) => {
  const {id, name, age, email} = req.body;
  let addUser = {};

  const user = users.find((user) => {
    if (user.email === email) {
      return user;
    }
  });
  if (user) {
    return res.status(404).json({
      message: "Email Already Exist",
    });
  }

  addUser.id = id;
  addUser.name = name;
  addUser.age = age;
  addUser.email = email;

  users.push(addUser);
  fs.writeFileSync(usersPath, JSON.stringify(users));
  res.status(201).json({
    message: "User Added Successfully",
    user: addUser,
  });
});
// ----------------------------------------------------------------------
// ERROR Route
app.use("{/*refa3yEldesoky}", (req, res, next) => {
  res.status(404).json({
    message: "The URL Not Found",
  });
});
