const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

// description  login page
// route  GET
router.get('/', ensureGuest, (req,res) =>{
res.render('login',{
    layout:'login',
})
})
 
// description dashboard
// routes GET/ dasboard
router.get('/dashboard', ensureAuth, (req,res) =>{
  
res.render('dashboard', {
    name: req.user.firstName,
})
})

module.exports = router