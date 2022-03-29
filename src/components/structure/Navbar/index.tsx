import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import './index.scss';


const Navbar: React.FC = () => (
    <nav className="navbar">
        <a href="/guide" className="navbar__icon"><BsQuestionCircle size="28px" color="#F0F0F0" /><span className="navbar__icon-underline"></span></a>
        <h2 className="navbar__title"><a href="/">Krarktosser</a><span className="navbar__title-underline"></span></h2>
    </nav>
);

export default Navbar;