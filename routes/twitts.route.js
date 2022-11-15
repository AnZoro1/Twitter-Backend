const { Router } = require('express')
const TwittController = require('../controller/twitts.controller')
const router = Router()
router.post('/twitts', TwittController.addNewTwitt)
router.patch('/twitts/:id', TwittController.changeTwitts)
router.get('/twitts', TwittController.getAllTwitts)
module.exports = router
