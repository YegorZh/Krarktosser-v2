import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', appHeight);
appHeight();
ReactDOM.render(<App />, document.getElementById('root'));