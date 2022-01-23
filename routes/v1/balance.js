const getTotalBalance = require('../../service/bitstamp-service').getTotalBalance
const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send({status:'OK'});
});

router.get('/get-all-balance',async (req,res,next)=>{
    const keys = Object.keys(globalUser);
    let responseData = {}
    //loop thru all the users
    for(const key in globalUser){
        let totalBalance = 0;
        let ethAmount = '0'
        let btcAmount = '0'
        if(globalUser[key].ETH!== undefined){
          ethAmount = globalUser[key].ETH;
        }
        if(globalUser[key].BTC!== undefined){
            btcAmount = globalUser[key].BTC
        }
        totalBalance = await getTotalBalance(ethAmount,btcAmount)
        responseData[key] = {BTC:btcAmount,ETH:ethAmount,totalBalance};
    }
    res.send(responseData)

});

router.post('/individual-user-balance', async(req,res,next)=>{
    try{
        const data = req.body;
        const userId = data.userId;
        const userCheckingBlanace = globalUser[userId];
        if(userCheckingBlanace !== undefined){
            let ethAmount = '0'
            let btcAmount = '0'
            if(userCheckingBlanace.ETH !== undefined){
              ethAmount = userCheckingBlanace.ETH;
            }
            if(userCheckingBlanace.BTC !== undefined){
                btcAmount = userCheckingBlanace.BTC
            }
            const totalBalance = await getTotalBalance(ethAmount,btcAmount)
            res.send({status:'ok',BTC:btcAmount,ETH:ethAmount,totalBalance:totalBalance})
        }else{
            res.send({status:'error',message:'No such user exist'})
        }
        

    }catch(e){
        res.send({status:'error',message:e.message})
    }
});

module.exports = router