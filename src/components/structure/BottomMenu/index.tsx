import React, { useContext } from "react";
import { BsGear, BsBrush } from "react-icons/bs";
import { appContext } from "../../App";
import './index.scss';

const BottomMenu: React.FC = () => {
    const context = useContext(appContext);
    const handleClickSettings = () => context?.setShowSettings(n => !n);

    return (
        <div className="bottom-menu">
            <button className="bottom-menu__clear" >
                <BsBrush color="#F0F0F0" size="28px" />
                <span className="bottom-menu__clear-underline"></span>
            </button>
            <button className="bottom-menu__settings">
                <BsGear color="#F0F0F0" size="28px" onClick={handleClickSettings}/>
                <span className="bottom-menu__settings-underline"></span>
            </button>
        </div>
    );
}

export default BottomMenu;