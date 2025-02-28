import React from 'react';
import Score from './Score.jsx';
import './Learner.css';

function Learner({ learner }) {
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <div className="scores">
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;