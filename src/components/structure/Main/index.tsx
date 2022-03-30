import React, { useContext, useState } from "react";
import InputField from "./sub/InputField";
import Results from "./sub/Results";
import settingsData from "./settings";
import { appContext } from "../../App";
import './index.scss';

type Settings = {
    value: string,
    name: string,
    options?: string[]
}

type StateSettings = {
    [key: string]: Settings;
}

const Main: React.FC = () => {
    const [settings, setSettings] = useState<StateSettings>(settingsData);
    const context = useContext(appContext);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
        setSettings(prevSettings => {
            const newSettings = { ...prevSettings };
            newSettings[id].value = event.target.value;
            return newSettings;
        });
    };

    const InputList = Object.keys(settings).map(key => <InputField {...settings[key]} onChangeHandler={onChangeHandler} id={key} key={key} />)
    return (
        <main className="main">
            <Results />
            <div className="main__button-wrapper">
                <button className="main__button">toss</button>
            </div>
            <div className={`main__form ${context?.showSettings && 'main__form-appear'}`}>
                {InputList}
            </div>
        </main>
    )
};

export default Main;
export { Settings };