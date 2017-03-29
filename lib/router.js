var express = require('express')
var router = express.Router()



;['post', 'get'].forEach(method => {
  ;[`/:controller/:id/:action`, `/:controller/:action`, `/:action`].forEach(route => {
    router[method](route, function (req, res, next) {
      let action = req.params.action
      let controller = req.params.controller
      if (parseInt(action) > 0) {
        action = 'index'
      }

      if (!controller) {
        controller = 'home'
      }
      try {
        require(`../controllers/${controller}`)[`${method}_${action}`](req, res, next)
      } catch (ex) {
        console.log(ex)
        res.send('404')
      }
    })
  })
})


module.exports = router
