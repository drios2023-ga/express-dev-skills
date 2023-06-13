var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');

//GET /skills
router.get('/', skillsController.index);

module.exports = router;