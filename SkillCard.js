import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
      <progress value={skill.progress} max="100">{skill.progress}%</progress>
    </div>
  );
};

export default SkillCard;
