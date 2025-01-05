import React, { useEffect, useState } from 'react';
import api from '../services/api';  // Import Axios instance

const SkillDashboard = () => {
  const [skills, setSkills] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState('name');
  const [order, setOrder] = useState('ASC');

  useEffect(() => {
    api.get('/skills', {
      params: { page, limit, sortBy, order },
    })
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));
  }, [page, limit, sortBy, order]);

  return (
    <div className="skill-dashboard">
      <h1>Skill Dashboard</h1>

      {/* Sorting Controls */}
      <div>
        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">Name</option>
          <option value="progress">Progress</option>
        </select>

        <label htmlFor="order">Order: </label>
        <select id="order" onChange={(e) => setOrder(e.target.value)} value={order}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      {/* Skills List */}
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name} - {skill.progress}%
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        <button onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default SkillDashboard;
