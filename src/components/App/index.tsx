import React, { SetStateAction, useState, Dispatch } from 'react';
import '../../styles/index.scss';
import Navbar from '../structure/Navbar';
import Main from '../structure/Main';
import BottomMenu from '../structure/BottomMenu';

interface IAppContext {
    showSettings: boolean,
    setShowSettings: Dispatch<SetStateAction<boolean>>
}
const appContext = React.createContext<IAppContext | null>(null);

const App: React.FC = () => {
    const [showSettings, setShowSettings] = useState<boolean>(false);

    return (
        <div className="app">
            <Navbar />
            <appContext.Provider value={{ showSettings, setShowSettings }}>
                <Main />
                <BottomMenu />
            </appContext.Provider>
        </div>
    );
}

export default App;
export { appContext };