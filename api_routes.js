var
  apiRouter = require('express').Router(),
  ctrl      = require('./controllers/hero_controller.js')

  apiRouter.route('/heroes')
    .get(ctrl.heroController.getAll)
    .get(ctrl.heroController.buildKey)
    // .post(ctrl.heroController.create)
    // .delete(ctrl.heroController.destroy)


module.exports  = apiRouter
