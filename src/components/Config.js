import { useState } from "react";
import { edit, tick } from "../images";
import '../styles/Config.scss';

const Config = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [value, setValue] = useState(3000);
    const [diff, setDiff] = useState(-200);

    const handleEdit = () => {
        if (isEditable) {
            setDiff(value - 3200);
        }
        setIsEditable(prev => !prev);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="config">
            <div className="header">
                Configuring your Office
            </div>
            <div className="sub-text">
                Based on your design preference and your office area below is a configuration for your space.
            </div>
            <div className="area-box">
                <div className="left">
                    <div className="area">Total Area <span>(SFT)</span></div>
                    <div>
                        {isEditable ? <input type="text" value={value} onChange={handleChange} /> : <span>{value}</span>}
                        <img src={!isEditable ? edit : tick} alt="Edit" onClick={handleEdit} />
                    </div>
                </div>
                <div className="right">
                    <span>3200</span>
                    <span className="difference">{diff}</span>
                </div>
            </div>
            <div className="status">{diff ? diff > 0 ? "You have crossed the area limit" : "You still have some area to cover" : "Perfect"}</div>
        </div>
    )
}

export default Config;