import { circle, tickButton } from "../images";

const Steps = () => {
    return (
        <div className="steps">
            <img alt="step" src={tickButton}/> <div className="divider"></div>Basic Info
            <img alt="step" src={tickButton}/> <div className="divider"></div>Design Style Quiz
            <img alt="step" src={tickButton}/> <div className="divider"></div>Quiz Output
            <img alt="step" src={tickButton}/> <div className="divider"></div>Space Configuration
            <img alt="step" src={circle}/> <div className="divider"></div>Cost Packages
            <img alt="step" src={circle}/> <div className="divider"></div>Information Upload
        </div>
    )
}

export default Steps;