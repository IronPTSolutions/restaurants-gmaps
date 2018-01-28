const Restaurant = require('../models/restaurant.model');
const path = require('path')

// module.exports.....
module.exports.index = (req, res, next) => {
  Restaurant.find({}).then(restaurants => {
    res.render("restaurants/index", {
      restaurants: restaurants
    })
  })
}

module.exports.new = (req, res, next) => {
  res.render("restaurants/new")
}

module.exports.create = (req, res, next) => {
  console.log(req.file)
  new Restaurant({
      name: req.body.name,
      description: req.body.description,
      file: req.file.filename,
      location: {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
      }
    }).save()
    .then(restaurant => {
      res.redirect("/restaurants")
      console.log(req.body)
    })
}

module.exports.pic = (req, res) => {
  Restaurant.findById(req.params.id).then((restaurant) => {
    res.sendFile(path.join(__dirname, '../', restaurant.file));
  });
}

module.exports.delete = (req, res, next) => {
  Restaurant.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("restaurants/new");
    }
  });
}
