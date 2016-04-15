var db = require('../models/hero.js')


module.exports = {
  heroController: {
    getAll: function (req, res) {
      console.log('testing123')
      db.Hero.find({}, function(err,heroes){
        if(err) {
          res.json(err)
        } else {
        res.json(heroes)
        }
      })
    },
    // update: function (req, res) {
    //   res.json({message: 'Updated Build Key'})
    // },
    buildKey: function (req, res) {
      hero.find({name: params.name},{recommendBuildKey: 1, _id:0},function(err,rbk){
        res.json(rbk)
      })
    }
    // create: function (req, res) {
    //   // console.log('coming from postman:', req.body)
    //   var buildKey = new db.Restaurant(req.body)
    //   restaurants.save(function(err){
    //     if (err) console.log(err)
    //     console.log("Restaurant Created!")
    //     console.log("details: %s", restaurant)
    //
    //   })
    //   res.json(restaurants)
    // },
    // destroy: function (req, res) {
    //   console.dir(req.body)
    //   restaurants.splice(req.body.index,1)
    //   res.json(restaurants)
    // }
  }
}
