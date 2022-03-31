import React, { useContext } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import './index.scss';
import { appContext } from "../../App";


const Navbar: React.FC = () => {
    const context = useContext(appContext);
    const handleGuideClick = () => context?.setShowGuide(n => !n);
    return (
        <nav className="navbar">
            <button className="navbar__icon" onClick={handleGuideClick}><BsQuestionCircle size="28px" color="#F0F0F0" /><span className="navbar__icon-underline"></span></button>
            <h2 className="navbar__title"><a href="#">Krarktosser</a><span className="navbar__title-underline"></span></h2>
        </nav>
    );
}

export default Navbar;