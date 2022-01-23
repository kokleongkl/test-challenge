const chai =  require('chai');
const chaiHttp = require('chai-http')
const app = require('./index')
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("balance", () => {
  describe('GET /all-get-balance', ()=>{
    it('should get all user balance', (done)=>{
      chai.request(app)
      .get('/api/v1/balance/get-all-balance')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body['user-1'].BTC.should.be.a('string')
        done();
     });

    })
  });
});
