const express = require('express')
const router = express.Router()

// description  login page
// route  GET
router.get('/', (req,res) =>{
res.render('login',{
    layout:'login',
})
})
 
// description dashboard
// routes GET/ dasboard
router.get('/dashboard', (req,res) =>{
res.render('dashboard')
})

module.exports = router