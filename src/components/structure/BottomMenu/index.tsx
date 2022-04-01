import React, { useContext } from "react";
import { BsGear, BsBrush } from "react-icons/bs";
import { appContext } from "../../App";
import './index.scss';

const BottomMenu: React.FC = () => {
    const context = useContext(appContext);
    const handleClickSettings = () => {
        if (context?.showGuide) {
            context?.setShowGuide(false);
            if (!context?.showSettings) context?.setShowSettings(true);
        } else {
            if (context?.formDiv.current?.scrollTop) context.formDiv.current.scrollTop = 0;
            context?.setShowSettings(n => !n);
        }

    }

    const handleClickClear = () => context?.setSettings(prevSettings => {
        const newSettings = { ...prevSettings };
        Object.keys(newSettings).map(key => newSettings[key].value = newSettings[key].default);
        return newSettings;
    });

    return (
        <div className="bottom-menu">
            <button
                disabled={context?.showGuide}
                className={`bottom-menu__clear ${context?.showGuide && 'bottom-menu__clear--disabled'}`}
                onClick={handleClickClear}
            >
                <BsBrush color="#F0F0F0" size="28px" />
                <span className="bottom-menu__clear-underline"></span>
            </button>
            <button
                className="bottom-menu__settings"
                onClick={handleClickSettings}
            >
                <BsGear color="#F0F0F0" size="28px" />
                <span className="bottom-menu__settings-underline"></span>
            </button>
        </div>
    );
}

export default BottomMenu;