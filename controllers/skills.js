const Skill = require('../models/skill');

module.exports = {
  index,
  show, 
  new: newSkill, 
  create,
  delete: deleteSkill
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
};

function newSkill(req, res){
  res.render('Skills/new',{
    title: 'New Skill'
  });
};

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/skills');
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills/show');
}