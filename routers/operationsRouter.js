const router = require('express').Router();
const OperationController = require('../src/controllers/operationController.js');

router.post('/', OperationController.operation);

module.exports = router;