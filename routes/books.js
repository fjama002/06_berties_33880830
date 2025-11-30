// Create a new router
const express = require("express");
const router = express.Router();

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("../users/login"); // redirect to the login page
  } else {
    next(); // move to the next middleware function
  }
};

router.get("/search", function (req, res, next) {
  res.render("search.ejs");
});

router.get("/search_result", function (req, res, next) {
  [check("keyword").trim().notEmpty().withMessage("Search input required")],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("search.ejs", { errors: errors.array() });
      }
      //searching in the database
      res.send("You searched for: " + req.query.keyword);
    };
});

router.get("/list", redirectLogin, function (req, res, next) {
  let sqlquery = "SELECT * FROM books"; // query database to get all the books
  // execute sql query
  db.query(sqlquery, (err, result) => {
    if (err) {
      next(err);
    }
    res.render("list.ejs", { availableBooks: result });
  });
});

router.get("/addbook", function (req, res, next) {
  res.render("addbook.ejs");
});

router.post("/bookadded", function (req, res, next) {
  // saving data in database
  let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)";
  // execute sql query
  let newrecord = [req.body.name, req.body.price];
  db.query(sqlquery, newrecord, (err, result) => {
    if (err) {
      next(err);
    } else
      res.send(
        "This book is added to the database, name: " +
          req.body.name +
          ", at price: " +
          req.body.price
      );
  });
});

router.get("/bargainbooks", redirectLogin, function (req, res) {
  router.get("/bargainbooks", function (req, res, next) {
    // retrieve data in database
    let sqlquery = "SELECT name, price FROM books WHERE price<20;";
    // execute sql query
    let newrecord = [req.body.name, req.body.price];
    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        next(err);
      } else res.send("Name: " + req.body.name + ", price " + req.body.price);
    });
  });
});

// Export the router object so index.js can access it
module.exports = router;
