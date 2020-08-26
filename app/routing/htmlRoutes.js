var path = require('path');

module.exports = function(app) {


  // USE route returns index.html for any undefined GET routes.
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });
};