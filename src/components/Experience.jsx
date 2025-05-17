import { EXPERIENCES } from "../data";
import { useState } from "react";
function TabButton({ children, onSelect, isSelected }) {
    return (
      <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>
          {children}
        </button>
      </li>
    );
  }

export default function ExperiencePage(){
    const [selectedTopic, setSelectedTopic] = useState("TCS_3");

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content" className="show">
          <h3>{EXPERIENCES[selectedTopic].role}</h3>
          <p>{EXPERIENCES[selectedTopic].status}</p>
          <ul className="custom-bullets">
            <li>{EXPERIENCES[selectedTopic].description1}</li>
            <li>{EXPERIENCES[selectedTopic].description2}</li>
            <li>{EXPERIENCES[selectedTopic].description3}</li>
          </ul>
        </div>
      );
    }
    return(
      <div id="work-experience" className="work">
        <div className="container">
        <section id="experience">
        <h2 id="worked"> <span>02. </span> Where I've Worked</h2>
    
        <div className="experience-container">
          {/* Sidebar menu */}
          <menu className="experience-menu">
            {/* <TabButton
              isSelected={selectedTopic === "freelancer"}
              onSelect={() => handleSelect("freelancer")}
            >
              Freelancer
            </TabButton> */}
            <TabButton
              isSelected={selectedTopic === "TCS_3"}
              onSelect={() => handleSelect("TCS_3")}
            >
              TCS_3
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "TCS_2"}
              onSelect={() => handleSelect("TCS_2")}
            >
              TCS_2
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "TCS_1"}
              onSelect={() => handleSelect("TCS_1")}
            >
              TCS_1
            </TabButton>
          </menu>
    
          {/* Tab content area */}
          <div id="tab-content" className="show">
            {tabContent}
          </div>
        </div>
      </section>
        </div>
      
    </div>
    )    
}
