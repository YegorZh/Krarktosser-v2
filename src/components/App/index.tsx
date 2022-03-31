import React, { SetStateAction, useState, useRef, Dispatch, createRef } from 'react';
import '../../styles/index.scss';
import Navbar from '../structure/Navbar';
import Main from '../structure/Main';
import BottomMenu from '../structure/BottomMenu';
import settingsData, { StateSettings } from '../structure/Main/settings'

interface IAppContext {
    showSettings: boolean,
    setShowSettings: Dispatch<SetStateAction<boolean>>,
    showGuide: boolean,
    setShowGuide: Dispatch<SetStateAction<boolean>>,
    settings: StateSettings,
    setSettings: Dispatch<SetStateAction<StateSettings>>,
    formDiv: React.MutableRefObject<HTMLDivElement | null>,
    mainDiv: React.MutableRefObject<HTMLDivElement | null>,
}

const appContext = React.createContext<IAppContext | null>(null);

const App: React.FC = () => {
    const [settings, setSettings] = useState<StateSettings>(settingsData);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [showGuide, setShowGuide] = useState<boolean>(false);
    const formDiv = useRef(null);
    const mainDiv = useRef(null)

    return (
        <div className="app">
            <appContext.Provider value={{ showSettings, setShowSettings, showGuide, setShowGuide, settings, setSettings, formDiv, mainDiv }}>
                <Navbar />
                <Main />
                <BottomMenu />
            </appContext.Provider>
        </div>
    );
}

export default App;
export { appContext, IAppContext };