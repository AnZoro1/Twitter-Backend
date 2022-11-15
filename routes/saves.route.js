const { Router } = require('express')
const SaveController = require('../controller/saves.controller')
const router = Router()
router.post('/saves', SaveController.addSaveBase)
module.exports = router
