var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */

// GET all skills
router.get('/', skillsCtrl.index);

// GET for the form --> /todos/new
router.get('/new', skillsCtrl.new)

// GET one todo -->  /skills/:id
router.get('/:skillsId', skillsCtrl.show)

module.exports = router;
