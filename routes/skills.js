var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');

//GET /skills/new <-- this will need to be moved
router.get('/new', skillsController.new); 

//GET /skills
router.get('/', skillsController.index);

//GET /skills/:id
router.get('/:id',skillsController.show);

//POST /todos
router.post('/', skillsController.create);

module.exports = router;