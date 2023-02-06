const { httpUpdateProfile, httpGetProfile } = require('./profile.controller');

const express = require('express');
profileRouter = express.Router();

profileRouter.get('/getProfile', httpGetProfile);

profileRouter.put('/update', httpUpdateProfile);

module.exports = profileRouter;