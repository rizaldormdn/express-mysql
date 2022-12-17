const express = require('express')
const route = express.Router()

// controller/students
const UserController = require('../controller/userController')

// create
route.post('/', UserController.createNewUser)

// read
route.get('/', UserController.getAllUser)

// read by id
route.get('/:id', UserController.getUserById)

// patch
route.put('/:id', UserController.updateUser)

// delete
route.delete('/:id', UserController.deleteUser)

module.exports = route