const { Router } = require('express')
const UserController = require('../controller/users.controller')
const { route } = require('./twitts.route')
const router = Router()
router.post('/users', UserController.addNewUser)
router.patch('/users/:id', UserController.changeUser)
router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getOneUser)
module.exports = router
