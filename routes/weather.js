const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", function (req, res, next) {
  let apiKey = "8a584df7816283e79b4c844d1bc9ba73";
  let city = req.query.weatherCity;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  request(url, function (err, response, body) {
    if (err) {
      next(err);
    } else {
      var weather = JSON.parse(body);
      res.render("weather.ejs");
      if (weather !== undefined && weather.main !== undefined) {
        var wmsg =
          "It is " +
          weather.main.temp +
          " degrees in " +
          weather.name +
          "! <br> The humidity now is: " +
          weather.main.humidity;
        res.send(wmsg);
      } else {
        res.send("No data found");
      }
    }
  });
});

// Export the router object so index.js can access it
module.exports = router;
