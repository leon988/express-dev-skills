const Skill = require('../models/skill');

module.exports = {
  index,
  show
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All Skills'
  });
};

function show(req, res) {
  console.log(req.params)
  res.render('skills/show', {
    skill: Skill.getOne(req.params.skillsId),
    title: 'Skill Details'
  });
}