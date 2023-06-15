const skill = require('../models/skill');

module.exports = {
    index, 
    show, 
    new: newSkill, 
    create,
    delete: deleteSkill
}

function show(req, res){
    res.render('skills/show',{
        skill:skill.getOneSkill(req.params.id)
    });
}

function index(req, res){
    res.render('skills/index',{
        skills: skill.getAllSkills()
    });
}

function newSkill(req, res){
    res.render('skills/new', {title: 'New Skill'});
  }

function create(req, res){
    console.log(req.body);
    console.log(req.body.name);
    //models are responsible for CRUD'ing the data
    skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }

  function deleteSkill(req, res){
    skill.deleteOne(req.params.id);
    res.redirect('/');

  }  