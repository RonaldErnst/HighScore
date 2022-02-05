'use strict';

const { firestore } = require('../firebase/firebase');
const TestModel = require('../models/TestModel');


const testFunction = async (req, res, next) => {
    try {
        const data = req.body;
        const test = new TestModel("Hello World");
        console.log(test.getText());
        res.status(200)
        res.send(test.getText())
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    testFunction
}