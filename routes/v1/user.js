const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.send({status:'OK'})
})

router.get('/get-all-user',async(req,res,next)=>{
    try{
        res.send(globalUser);
    }catch(e){
        res.send({status:'Error',message:e.message})

    }
})

router.post('/add-new-user',async(req,res,next)=>{
    try{
        data = req.body
        globalUser[data.userId]= {BTC:data.BTC,ETH:data.ETH}
        res.send(globalUser);

    }catch(e){
        res.send({status:'Error',message:e.message})
    }
})


module.exports = router



