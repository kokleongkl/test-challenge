const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    return res.jsonp({status:'OK'})

})


router.use('/user',require('./user'))
router.use('/balance',require('./balance'))
module.exports = router