'use strict';

const firebase = require('../db');
const TestModel = require('../models/TestModel');
const firestore = firebase.firestore();


const testFunction = async (req, res, next) => {
    try {
        const data = req.body;
        const test = new TestModel("Hello World");
        console.log(test.getText());
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    testFunction
}