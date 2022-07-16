import './App.scss';
import Cards from './components/Cards';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import NewProject from './components/NewProject';
import Chart from './components/Chart';
import Tiles from './components/Tiles';
import Config from './components/Config';
import Steps from './components/Steps';
import { useState } from 'react';
import { CARDS, PROJECTS } from './config';

function App() {
  const [cards, setCards] = useState(CARDS);
  const [projects, setProjects] = useState(PROJECTS);

  const addCard = (val) => {
    const card = { id: cards.length + 1, count: 0, heading: val, description: "This space is for a 2 liner short description." }
    setCards([card, ...cards]);
  };

  const addProject = (project) => {
    const newProject = {id: projects[projects.length-1].id + 1, ...project};
    setProjects([...projects, newProject]);
  }

  return (
    <div className="App">
      <div className="outer">
        <Navbar />
        <div className="main">
          <div className="tab-bar">
            <div className="tab">Project</div>
          </div>
          <div className="inner">
            <div className="options">
              <Dropdown projects={projects} setProjects={setProjects} />
              <NewProject addProject={addProject} />
            </div>
            <div className="content">
              <Steps />
              <div className="content-body">
                <div className="chart-box">
                  <Config />
                  <div className="chart-section">
                    <Chart />
                    <Tiles addCard={addCard} />
                  </div>
                </div>
                <Cards cards={cards} setCards={setCards} />
              </div>
            </div>
            <div className="proceed">
              Proceed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
