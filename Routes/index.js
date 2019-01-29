// here is the centralized file for all the routes for further routing
const express = require('express');
const userRoutes = require('./user_routes');

const router = express.Router();
// const ctrls = require('../Controllers/AdminControllers/admin.controllers');
const adminRoutes = require('./admin_routes');
// placeholder const authChecker =

//  ADMIN ROUTES

router
  .use('/admin', adminRoutes)
  .use('/', userRoutes);

module.exports = router;
