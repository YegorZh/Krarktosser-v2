import React, { SetStateAction, useState, Dispatch } from 'react';
import '../../styles/index.scss';
import Navbar from '../structure/Navbar';
import Main from '../structure/Main';
import BottomMenu from '../structure/BottomMenu';
import settingsData, { StateSettings } from '../structure/Main/settings'

interface IAppContext {
    showSettings: boolean,
    setShowSettings: Dispatch<SetStateAction<boolean>>,
    settings: StateSettings,
    setSettings: Dispatch<SetStateAction<StateSettings>>
}

const appContext = React.createContext<IAppContext | null>(null);

const App: React.FC = () => {
    const [settings, setSettings] = useState<StateSettings>(settingsData);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    return (
        <div className="app">
            <Navbar />
            <appContext.Provider value={{ showSettings, setShowSettings, settings, setSettings }}>
                <Main />
                <BottomMenu />
            </appContext.Provider>
        </div>
    );
}

export default App;
export { appContext, IAppContext };