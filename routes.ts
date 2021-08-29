const controller = require('./controller')
import assets from './src/assets'
import orderbook from './src/orderbook'
import summary from './src/summary'
import tickers from './src/tickers'
import totalliquidity from './src/totalliquidity'
import trades from './src/trades'

const router = require('express').Router()

router.get('/getTest', controller.getTest)
router.get('/assets', assets)
router.get('/orderbook', orderbook)
router.get('/summary', summary)
router.get('/tickers', tickers)
router.get('/totalliquidity', totalliquidity)
router.get('/trades', trades)

// router.post('/sendMail', bodyParser.json(), controller.sendMail);

module.exports = router
