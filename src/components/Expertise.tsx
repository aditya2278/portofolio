import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "PHP",
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "SQL"
];

const labelsSecond = [
    "XCode",
    "Firebase",
    "Netlify",
    "Git",
    "Confluence",
    "Slack",
    "Figma",
    "Azure",
    "AWS",
    "Hadoop",
    "Spark"
];

const labelsThird = [
    "Agile (Scrum/Kanban)",
    "JIRA",
    "Trello",
    "Asana",
    "OKRs",
    "Stakeholder Management",
    "A/B Testing",
    "Roadmapping",
    "Microsoft Excel",
    "Power BI",
    "Pivot Tables"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Full Stack Web Development</h3>
                        <p>Proficient in building web applications using modern programming languages and frameworks.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Cloud, Tools &amp; Technologies</h3>
                        <p>Skilled in leveraging modern tools and cloud services to build and deploy robust solutions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faBriefcase} size="3x"/>
                        <h3>Project &amp; Product Management</h3>
                        <p>Experienced in agile methodologies and effective project management to drive successful outcomes.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools &amp; Techniques:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
