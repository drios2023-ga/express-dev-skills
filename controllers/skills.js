const skill = require('../models/skill');

module.exports = {
    index, show
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