//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("landingPage");
  // const post = {
  //   email: req.body.email,
  // };
});
app.post("/", function (req, res) {
  const primaryEmail = req.body.enteredEmail;
  res.render("signInHeader", { hiddenMail: primaryEmail });
});

app.get("/signin", function (req, res) {
  res.render("signInHeader");
});

app.post("/signin", function (req, res) {
  const userEmailId = req.body.firstMail;
  res.render("step2", { userEmail: userEmailId });
});

app.get("/step2", function (req, res) {
  res.render("step2");
});
app.get("/step2of3", function (req, res) {
  res.render("step2of3");
});
app.post("/step2of3", function (req, res) {
  res.render("step2of3");
});

app.get("/selectplan", function (req, res) {
  res.render("selectplan");
});
app.post("/selectplan", function (req, res) {
  res.render("selectplan");
});
app.get("/payment", function (req, res) {
  res.render("payment");
});
app.post("/payment", function (req, res) {
  res.render("payment");
});

app.get("/cardpayment", function (req, res) {
  res.render("cardpayment");
});
app.post("/cardpayment", function (req, res) {
  res.render("cardpayment");
});

app.get("/upipayment", function (req, res) {
  res.render("upipayment");
});
app.post("/upipayment", function (req, res) {
  res.render("upipayment");
});
app.get("/success", function (req, res) {
  res.render("success");
});
app.post("/success", function (req, res) {
  res.render("success");
});

app.listen(3000, function () {
  console.log("port on 3000");
});
