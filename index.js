const express = require('express')
const app = express();
const port = 3000
const router =  require('./routes')

global.globalUser = {
  "user-1": {
      "BTC": "0.5",
      "ETH": "2"
    },
    "user-2": {
      "BTC": "0.1",
    },
    "user-3": {
      "ETH": "5",
    },
  }
  app.use(express.json()) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(router)

module.exports = app