import React from 'react';
import '../../styles/index.scss';
import Navbar from '../structure/Navbar';
import BottomMenu from '../structure/BottomMenu';

const App: React.FC = () => (
    <div className="app">
        <Navbar />
        <BottomMenu />
    </div>
);

export default App;