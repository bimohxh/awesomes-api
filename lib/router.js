var express = require('express')
var router = express.Router()



// define the home page route
;['post', 'get'].forEach(method => {
  ;[`/:controller/:id/:action`, `/:controller/:action`].forEach(route => {
    router[method](route, function (req, res, next) {
      let action = req.params.action
      if (parseInt(action) > 0) {
        action = 'index'
      }
      try {
        require(`../controllers/${req.params.controller}`)[`${method}_${action}`](req, res, next)
      } catch (ex) {
        console.log(ex)
        res.send('404')
      }
    })
  })
})


module.exports = router
