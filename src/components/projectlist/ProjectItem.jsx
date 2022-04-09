import React from "react";
import { Icon } from "@iconify/react";
import { skillBadge } from "../../assets/data";

const ProjectItem = ({ name, site, code, image, skills }) => {
    const imageLink = `./images/${image}`;

    return (
        <div className="project-box">
            <a
                href={site}
                className="project-tile"
                target="_blank"
                rel="noreferrer"
            >
                <img src={imageLink} alt={name} />
                {name}
            </a>
            <a
                href={code}
                className="project-code"
                target="_blank"
                rel="noreferrer"
            >
                <span className="code">Code</span>
            </a>
            <div className="project-skills">
                {skills.map((skill, index) => (
                    <Icon icon={skillBadge[skill]} key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectItem;
