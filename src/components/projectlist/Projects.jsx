import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ data }) => {
    return (
        <div className="project-tiles">
            {data.map((item, index) => (
                <ProjectItem {...item} key={index + item.name} />
            ))}
        </div>
    );
};

export default Projects;
