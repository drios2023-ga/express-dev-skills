const skills = [
    {id: 1, skill: 'JavaScript', level: 'intermediate'},
    {id: 2, skill: 'Node.js', level: 'beginner'},
    {id: 3, skill: 'Express', level: 'beginner'},
    {id: 4, skill: 'MongoDB', level: 'novice'},
    {id: 5, skill: 'React', level: 'huh'},        
]

module.exports = {
    getAllSkills, getOneSkill
}

function getAllSkills(){
    return skills;
}

function getOneSkill(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}