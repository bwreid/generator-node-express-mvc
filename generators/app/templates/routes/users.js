const express = require('express')
const router = express.Router()

router.get('/profile', (req, res, next) => {
  res.render('users/show')
})

module.exports = router
