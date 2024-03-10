var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */

// GET all skills
router.get('/', skillsCtrl.index);

// GET for the form --> /skills/new
router.get('/new', skillsCtrl.new);

// GET one skill -->  /skills/:id
router.get('/:skillsId', skillsCtrl.show);

// POST a skill --> /skills
router.post('/', skillsCtrl.create);  

// DELETE a skill --> /skills/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
