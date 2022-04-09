import { data, data2 } from '../../assets/data';
import './project.scss';
import Projects from './Projects';

import React from 'react';
import Skills from './Skills';

const ProjectList = () => {
  return (
    <section id='projects' className='projects'>
      <Skills />
      <h1>Projects</h1>
      <Projects data={data} />
      <h1>Small Projects</h1>
      <Projects data={data2} />
    </section>
  );
};

export default ProjectList;
