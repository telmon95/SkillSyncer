const Skill = require('../models/skill');

// Get skills with pagination and sorting
const getSkills = async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'name', order = 'ASC' } = req.query;

  try {
    const skills = await Skill.findAll({
      limit: parseInt(limit),
      offset: (page - 1) * limit,
      order: [[sortBy, order]],
    });

    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching skills', error: err });
  }
};

// Add a new skill
const addSkill = async (req, res) => {
  const { name, description, progress } = req.body;
  try {
    const newSkill = await Skill.create({ name, description, progress });
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ message: 'Error adding skill', error: err });
  }
};

module.exports = { getSkills, addSkill };
