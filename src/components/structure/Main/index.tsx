import React, { useContext, useEffect, useState } from "react";
import InputField from "./sub/InputField";
import Results from "./sub/Results";
import { appContext, IAppContext } from "../../App";
import { Settings } from "./settings";
import Guide from "./sub/Guide";
import './index.scss';

const Main: React.FC = () => {
    const { showSettings, settings, setSettings, formDiv, showGuide } = useContext(appContext) as IAppContext;
    const [tossButton, setTossButton] = useState(0);
    const [isRequesting, setIsRequesting] = useState(false);
    const [results, setResults] = useState({ heads: 0, tails: 0, totalFlips: 0 });

    useEffect(() => {
        if(isRequesting) return;
        setIsRequesting(true);
        let req = 'https://krarktosser.herokuapp.com/api/coin?';
        Object.keys(settings).forEach(key => {
            if (settings[key].value) req += key + '=' + settings[key].value.toLowerCase() + '&';
        })
        fetch(req)
            .then(repsone => repsone.json())
            .then(data => setResults(data))
            .catch(err => alert(err))
            .then(() => setIsRequesting(false));
    }, [tossButton])

    const onTossHandler = () => setTossButton(Date.now);
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
        setSettings(prevSettings => {
            const newSettings = { ...prevSettings };
            const value = event.target.value;
            const validated = newSettings[id].validation?.execute(value);
            newSettings[id].value = validated || value;
            return newSettings;
        });
    };

    const InputList = Object.keys(settings).map(key => <InputField
        {...settings[key]}
        onChangeHandler={onChangeHandler}
        id={key}
        key={key}
        disabled={settings[key].dependancy?.execute(settings)} />)
    return (
        <main className="main">
            <div className="main__top">
                <Results {...results} isRequesting={isRequesting} />
                <div className="main__button-wrapper">
                    <button
                        className="main__button"
                        onClick={onTossHandler}
                    >
                        toss
                    </button>
                </div>
            </div>
            <div ref={formDiv} className={`main__form-container ${showSettings && 'main__form-container--appear'}`}>
                <div className={`main__form ${showSettings && 'main__form--appear'}`}>
                    {InputList}
                </div>
            </div>
            <div className={`main__blur ${showSettings && 'main__blur--appear'}`}></div>
            <div className={`main__guide-container ${showGuide && 'main__guide-container--appear'}`}><Guide /></div>
        </main>
    )
};

export default Main;
export { Settings };