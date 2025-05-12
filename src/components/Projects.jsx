import { ProjectData } from "../data";

export default function ProjectTab() {
    return (
      <div className="project-wrapper" id="projectwork">
        <h2>
         <span>04.</span>Some Things I’ve Built
         </h2>
        <div  className="project-grid">
          {Object.values(ProjectData).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <img src={project.folderlogo} alt="Folder" className="icon" />
                
                <a href={project.projectSite} target="_blank"><img src={project.projectLink} alt="Link" className="icon" /></a>
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description1}</p>
              <ul className="tech-stack">
                {project.techsStack.map((tech, i) => (
                  <li key={i} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  