import React from "react";
import { BsGear, BsBrush } from "react-icons/bs";
import './index.scss';

const BottomMenu: React.FC = () => (
    <div className="bottom-menu">
        <button className="bottom-menu__clear">
            <BsBrush color="#F0F0F0" size="28px" />
            <span className="bottom-menu__clear-underline"></span>
        </button>
        <button className="bottom-menu__settings">
            <BsGear color="#F0F0F0" size="28px" />
        </button>
    </div>
);

export default BottomMenu;