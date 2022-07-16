import '../styles/Navbar.scss';
import { chat, help, logo, logout, name, profile } from '../images';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(prev => !prev);
    }

    return (
        <div className={toggle ? "navbar open" : "navbar"} onClick={handleClick}>
            <div className="top">
                <img src={logo} alt="" className='logo' />
                {toggle && <img src={name} alt="" className="name" />}
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