'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

if (process.env && process.env.NODE_ENV) {
    dotenv.config({path: '.env.' + process.env.NODE_ENV});
} else {
    dotenv.config({path: '.env.development'});
}

const {
    HOST,
    PORT,
    HOST_URL
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
}