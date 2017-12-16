var express = require('express');
var axios = require('axios');
var router = express.Router();
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({
//     user1: 'Atom',
//     user2: 'Particle'
//   })
// });

/* GET home page. */
const forward_get = (req, res, next) => {
  console.log("in /coins");
  const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'
  axios.get(url)
    .catch(err => {
      alert('There was an error trying to get all coins')
    })
    .then(response => {
      // console.log(response.data);
      res.json(response.data);
    })
}
const forward_get2 = (req, res, next) => {
  console.log("in /coins2");
  console.log(req.params.coins);
  const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + req.params.coins + ',&tsyms=USD'
  //const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + req.params.coins + '&tsyms=USD&e=Coinbase'
  axios.get(url)
    .catch(err => {
      alert('There was an error trying to get all coins')
    })
    .then(response => {
      console.log(response.data.DISPLAY);
      res.json(response.data.DISPLAY);
    })
}

router.get('/', forward_get);
router.get('/:coins', forward_get2);
module.exports = router;