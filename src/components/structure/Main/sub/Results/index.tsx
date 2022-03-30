import React from "react";
import './index.scss';

const Results: React.FC = () => {

    return (
        <div className="results">
            <div className="results__top-row">
                <div className="results__wrapper">
                    <h2 className="results__title">Heads</h2>
                    <span className="results__result">0</span>
                </div>
                <div className="results__wrapper">
                    <h2 className="results__title">Tails</h2>
                    <span className="   results__result">0</span>
                </div>
            </div>
            <div className="results__wrapper results__wrapper-bottom-row">
                <h2 className="results__title">Total Flips</h2>
                <span className="results__result results__result-total">0</span>
            </div>
        </div>
    )
};

export default Results;