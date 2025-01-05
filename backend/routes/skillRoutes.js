const express = require('express');
const { getSkills, addSkill } = require('../controllers/skillController');
const { verifyToken, verifyRole } = require('../services/authMiddleware');  // Import the middleware
const router = express.Router();

router.get('/', getSkills);  // No role required for viewing skills

// Add the verifyToken and verifyRole middleware for adding skills
router.post('/', verifyToken, verifyRole(['admin']), addSkill);  // Only admins can add skills

module.exports = router;
