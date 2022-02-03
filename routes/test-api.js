const express = require('express');
const { testFunction } = require('../controllers/test-controller');

const router = express.Router();

router.get('/test', testFunction);


module.exports = {
    routes: router
}