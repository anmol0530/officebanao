import { useState } from "react";
import { plus } from "../images";
import "../styles/NewProject.scss";

const NewProject = ({ addProject }) => {
    const [toggle, setToggle] = useState(false);
    const [project, setProject] = useState({});

    const handleChange = (e) => {
        const newProject = { ...project, [e.target.name]: e.target.value };
        setProject(newProject);
    }

    const handleClick = () => {
        setToggle(prev => !prev);
        setProject({});
    }

    const handleAddProject = () => {
        setToggle(false);
        if (project.name || project.locality || project.city) {
            addProject(project);
            setProject({});
        }
    }

    return (
        <>
            <div className="new-project" >
                <div className="new-project-btn" onClick={handleClick}>
                    Start New Project
                    <img src={plus} alt="Plus Sign" />
                </div>
                {toggle &&
                    <>
                        <div className="input">
                            Project Name:
                            <input type="text" name="name" className="name" onChange={handleChange} />
                            Locality:
                            <input type="text" name="locality" className="locality" onChange={handleChange} />
                            City:
                            <input type="text" name="city" className="city" onChange={handleChange} />
                            <button className="add-project" onClick={handleAddProject}>Add Project</button>
                        </div>
                        <div className="dropdown-toggler" onClick={handleClick}></div>
                    </>
                }
            </div>
        </>
    )
};

export default NewProject;