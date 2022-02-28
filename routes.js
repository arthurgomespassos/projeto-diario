const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const registerController = require('./src/controllers/registerController');
const loginController = require('./src/controllers/loginController');

// home
route.get('/', homeController.index);

// register
route.get('/register', registerController.index);
route.post('/register/register', registerController.register);

// login
route.get('/login', loginController.index);
route.post('/login/login', loginController.login);

module.exports = route;