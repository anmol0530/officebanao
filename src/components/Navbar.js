import '../styles/Navbar.scss';
import { chat, help, logo, logout, name, profile } from '../images';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        if(e.target.className !== 'name') {
            setToggle(prev => !prev);
        }
    }

    return (
        <div className={toggle ? "navbar open" : "navbar"} onClick={handleClick}>
            <div className="top">
                <img src={logo} alt="" className='logo' />
                {toggle && <a href="https://github.com/anmol0530/officebanao" className='github' target="_blank" rel="noreferrer"><img src={name} alt="" className="name" /></a>}
            </div>
            <div className="bottom">
                <div className="menu-items">
                    <img src={chat} alt="" className='logo' />
                    {toggle && <span>Start a chat</span>}
                </div>
                <div className="menu-items">
                    <img src={help} alt="" className='logo help' />
                    {toggle && <span>Request a callback</span>}
                </div>
                <div className="menu-items profile">
                    <img src={profile} alt="" className='logo' />
                    {toggle && <span>Jane Doe</span>}
                </div>
                <div className="menu-items">
                    <img src={logout} alt="" className='logo' />
                    {toggle && <span>Logout</span>}
                </div>
            </div>
        </div>
    )
};

export default Navbar;