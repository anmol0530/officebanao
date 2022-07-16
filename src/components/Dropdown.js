import { useState } from "react";
import "../styles/Dropdown.scss";

const Dropdown = ({projects}) => {
  const [selected, setSelected] = useState(projects[0]);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(prev => !prev);
  }

  const handleSelection = (project) => {
    setSelected(project);
    setToggle(prev => !prev);
  }

  return (
    <div className="dropdown">
      <div className="selected" onClick={handleClick}>
        <span className="project-name">{selected.name}</span>
        <div className="id-location">
          <span className="project-id">{selected.id}</span>
          <span className="location">{selected.city}:{selected.locality}</span>
        </div>
      </div>
      {toggle &&
        <>
          <div className="dropdown-list">
            {projects.map(project => (
              <div className="item" onClick={() => handleSelection(project)}>
                <span className="project-name">{project.name}</span>
                <div className="id-location">
                  <span className="project-id">{project.id}</span>
                  <span className="location">{project.city}:{project.locality}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="dropdown-toggler" onClick={handleClick}></div>
        </>
      }
    </div>
  )
};

export default Dropdown;