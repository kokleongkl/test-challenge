const axios = require("axios");

module.exports = {
    getTotalBalance : async (eth_amount,btc_amount)=>{
    try{
    let totalBalance = 0
    //make sure the parameters pass is in float value
    const ethAmount = parseFloat(eth_amount);
    const btcAmount = parseFloat(btc_amount);
    //currently the api bitstamp only support limited of currency hence usd is use here, would be good if there are more currency because the application serves worldwide
    let response = await axios.get('https://www.bitstamp.net/api/v2/ticker/ethusd/');
    let data = response.data;
    totalBalance += data.last * ethAmount
    response = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd/');
    data = response.data;
    totalBalance += data.last * btcAmount
    return totalBalance.toString()
    
    }catch(e){
        return e.message;
    }
}
};