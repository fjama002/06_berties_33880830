// Create a new router
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('./login') // redirect to the login page
  } else {
    next(); // move to the next middleware function
  }
}

router.get("/register", function (req, res, next) {
  res.render("register.ejs");
});

router.post("/registered", function (req, res, next) {
  const saltRounds = 10;
  const plainPassword = req.body.password;

  bcrypt.hash(plainPassword, saltRounds, function (err, hashedPassword) {
    // Store hashed password in your database.
    // saving data in database
    let sqlquery =
      "INSERT INTO user_details (firstname, lastname, username, email, hashedPassword) VALUES (?,?,?,?,?)";
    // execute sql query
    let newrecord = [
      req.body.firstname,
      req.body.lastname,
      req.body.username,
      req.body.email,
      hashedPassword,
    ];

    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        next(err);
      } else
        result =
          "Hello " +
          req.body.firstname +
          " " +
          req.body.lastname +
          " you are now registered!  We will send an email to you at " +
          req.body.email;
      result +=
        "Your password is: " +
        req.body.password +
        " and your hashed password is: " +
        hashedPassword;

      res.send(result);
    });
  });
});

router.get('/list', redirectLogin, function (req, res) {
  router.get("/list", function (req, res, next) {
    let sqlquery = "SELECT username FROM user_details"; // query database to get all the users
    // execute sql query
    db.query(sqlquery, (err, result) => {
      if (err) {
        next(err);
      }
      res.render("users.ejs", { availableUsers: result });
    });
  })
});

router.get("/login", function (req, res, next) {
  res.render("login.ejs");
});

router.get("/loggedin", function (req, res, next) {
  res.send("Login successful!")
  // Save user session here, when login is successful
  req.session.userId = req.body.username;
});

// Export the router object so index.js can access it
module.exports = router;
