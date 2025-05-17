import Resume from '../assets/Bajanthri_Harshavardhan Resume1.pdf'
export default function Navbar() {
    return (
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">H</div>
          <nav className="nav-links">
            <ul>
              <li><a href="#aboutSection"><span>01.</span> About</a></li>
              <li><a href="#work-experience"><span>02.</span> Experience</a></li>
              <li><a href="#skills-wrapper"><span>03.</span> Skills</a></li>
              <li><a href="#projectwork"><span>04.</span> Work</a></li>
              <li><a href="#contactme"><span>05.</span> Contact</a></li>
              <li>
                <a href={Resume} className="resume-btn" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }