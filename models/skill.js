const skills = [
  {id: 125223, skill: 'JavaScript', done: true},
  {id: 127904, skill: 'HTML', done: true},
  {id: 139608, skill: 'CSS', done: true}
];

module.exports = {
  getAll, 
  getOne, 
  create,
  deleteOne
};

function getAll() {
  return skills;
};

function getOne(id) {
  id =  parseInt(id); 
  const skill =  skills.find(skill => skill.id === id)
  return skill
};

function create() {

};

function deleteOne(){

};