const controller = require('./controller')
import assets from './src/assets'
import orderbook from './src/orderbook'
import summary from './src/summary'
import tickers from './src/tickers'
import totalliquidity from './src/totalliquidity'
import trades from './src/trades'
import e404 from './src/404'

const router = require('express').Router()

router.get('/getTest', controller.getTest)
router.get('/assets', assets)
router.get('/orderbook', orderbook)
router.get('/summary', summary)
router.get('/tickers', tickers)
router.get('/totalliquidity', totalliquidity)
router.get('/trades', trades)

router.get('/orderbook/:pair', (req: any, res: any) => {
  req.query = req.params
  orderbook(req, res)
})
router.get('/trades/:pair', (req: any, res: any) => {
  req.query = req.params
  trades(req, res)
})
router.get('/:error', e404)

// router.post('/sendMail', bodyParser.json(), controller.sendMail);

module.exports = router
