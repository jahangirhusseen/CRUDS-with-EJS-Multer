const express = require('express');
const { getAllStudent } = require('../controllers/studentControllers');
const router = express.Router();

router.route('/').get(getAllStudent);

module.exports = router;