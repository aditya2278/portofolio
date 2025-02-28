import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2024 – August 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Project Manager Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Spectrum, St. Louis, MO</h4>
            <ul>
              <li>Agile Scrum</li>
              <li>Jira</li>
              <li>Salesforce Lightning</li>
              <li>Excel-based Tracking</li>
              <li>Stakeholder Management</li>
              <li>OKRs</li>
            </ul>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2023 – December 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">GTM Advisor</h3>
            <h4 className="vertical-timeline-element-subtitle">ActionLink, Long Island, NY</h4>
            <ul>
              <li>Training & Presentation</li>
              <li>Technical Guidance (Intel Processors)</li>
              <li>Feedback Loop Implementation</li>
              <li>Cross-functional Collaboration</li>
              <li>Sales Performance Analysis</li>
            </ul>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2023 – June 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">University at Buffalo, NY</h4>
            <ul>
              <li>Python</li>
              <li>Kafka</li>
              <li>WebSockets</li>
              <li>IoT Systems</li>
              <li>Data Relay Systems</li>
              <li>Asyncio</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
