const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");

exports.register = (req, res) => {
  res.render("auth/register", { body: "register" });
};

exports.login = (req, res) => {
  res.render("auth/login", { body: "login" });
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userModel.createUser(name, email, hashedPassword);
  req.session.user = user;
  res.redirect("/jobs");
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = userModel.findUserByEmail(email);
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    return res.redirect("/jobs");
  }
  res.render("auth/login", { error: "Invalid credentials" });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
