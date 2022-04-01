import { data } from "../../assets/data";

import React from "react";
import ProjectItem from "./ProjectItem";
import "./project.scss";
const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="project-tiles">
                {data.map((item, index) => (
                    <ProjectItem {...item} key={index + item.name} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
