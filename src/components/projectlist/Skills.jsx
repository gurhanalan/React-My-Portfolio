import React from 'react';
import { Icon } from '@iconify/react';
import { skillBadge } from '../../assets/data';

const Skills = () => {
  return (
    <>
      <h1>Skill Set</h1>
      <div className='skills'>
        {Object.entries(skillBadge).map(([key, value], index) => {
          return <Icon icon={value} key={index} />;
        })}
      </div>
    </>
  );
};

export default Skills;
