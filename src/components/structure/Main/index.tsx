import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import InputField from "./sub/InputField";
import Results from "./sub/Results";
import { appContext, IAppContext } from "../../App";
import { Settings } from "./settings";
import Guide from "./sub/Guide";
import './index.scss';

const Main: React.FC = () => {
    const {showSettings, settings, setSettings, formDiv, showGuide, mainDiv } = useContext(appContext) as IAppContext;
    const [tossButton, setTossButton] = useState(0);
    const [isRequesting, setIsRequesting] = useState(false);
    const [results, setResults] = useState({ heads: 0, tails: 0, totalFlips: 0 });
    const [stopTransitions, setStopTransitions] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    // request to api
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        if (isRequesting) return;
        setIsRequesting(true);
        let url = 'https://krarktosser.herokuapp.com/api/coin?';
        Object.keys(settings).forEach(key => url += key + '=' + settings[key].value.toLowerCase() + '&')
        axios.get(url)
            .then(resp => setResults(resp.data))
            .catch(err => alert(err))
            .then(() => setIsRequesting(false));
    }, [tossButton]);


    const scrollMainTop = () => {
        const scrollTop = mainDiv?.current?.scrollTop;
        const scrollHeight = mainDiv.current?.scrollHeight;
        const clientHeight = mainDiv.current?.clientHeight;
        if (
            scrollTop || scrollTop === 0 && clientHeight && scrollHeight
        ) mainDiv.current?.scrollTo({ top: Number(scrollHeight) - Number(clientHeight) + 1, behavior: 'smooth' });
    }
    // disable transitions on resize
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        window.addEventListener('resize', () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            else setStopTransitions(true);

            timer = setTimeout(() => {
                setStopTransitions(false);
                timer = null;
            }, 100);
            scrollMainTop();
        });
    }, []);

    const onTossHandler = () => setTossButton(Date.now);
    const onFocusHandler = () => {
    //  scrollMainTop();   
    }
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
        setSettings(prevSettings => {
            const newSettings = { ...prevSettings };
            const value = event.target.value;
            const validated = newSettings[id].validation?.execute(value);
            newSettings[id].value = validated || value;
            return newSettings;
        });
        onFocusHandler();
    };

    const InputList = Object.keys(settings).map(key => <InputField
        {...settings[key]}
        onChangeHandler={onChangeHandler}
        onFocusHandler={onFocusHandler}
        id={key}
        key={key}
        disabled={settings[key].dependancy?.execute(settings)} />)
    return (
        <main className="main" ref={mainDiv}>
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
            <div ref={formDiv} className={
                `main__form-container 
                ${showSettings && 'main__form-container--appear'} 
                ${stopTransitions && 'stop-transitions'}`
            }>
                <div className={`main__form ${showSettings && 'main__form--appear'}`}>
                    {InputList}
                </div>
            </div>
            <div className={`main__blur ${showSettings && 'main__blur--appear'}`}></div>
            <div className={`main__blur main__blur--upper ${showGuide && 'main__blur--appear'}`}></div>
            <div className={`main__guide-container ${showGuide && 'main__guide-container--appear'}`}><Guide /></div>
        </main>
    )
};

export default Main;
export { Settings };