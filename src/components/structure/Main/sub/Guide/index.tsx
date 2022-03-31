import React from "react";
import './index.scss';

const Guide: React.FC = () => {
    const settingsSection = [
        { name: 'Amount', text: 'How many coins to throw.' },
        {
            name: `Krark's Thumb`,
            text: `How many cards named "Krark's Thumb" you have in play.`,
            notion: `Settings listed below won't take effect unless Krark's Thumb is larger than 0.`
        },
        { name: `Priority`, text: `Which side to try to prioritize with "Krark's Thumb" effect. None, Heads or Tails.` },
        { name: `Even spread`, text: `If True tries to even out results.` },
        { name: `Min priority`, text: `Minimum value to try and achieve for prioritized side.` },
        { name: `Max priority`, text: `Maximum value for prioritized side. Once achieved tries to maximize secondary side.` },
        { name: `Min secondary`, text: `Minimum value to try and achieve for secondary side.` },
        {
            name: `Max secondary`, text: `Maximum value for secondary side. Once achieved tries to maximize prioritized side.`,
            notion: `If any of the parameters overlap given priority is used:\nMin Priority > Min Secondary > Max Priority > Max Secondary > Even Spread > Priority`
        },
    ]

    return (
        <div className="main__guide">
            <div className="guide__wrapper">
                <h2 className="guide__title">What's this site about?</h2>
                <p className="guide__text">
                    The main feature of this site is coin tossing without hussle.
                    You specify the amount and get results, without waiting or tedious animations.
                    But if you activate advanced settings you can manipulate your results,
                    simulating how card Krark's Thumb from Magic: The Gathering works.
                </p>
            </div>
            <img
                src="https://c1.scryfall.com/file/scryfall-cards/large/front/7/8/78a5d49a-747e-4ec8-a20a-ca917c315774.jpg?1610836017"
                alt="Krark's Thumb the card."
                className="guide__card"
            />
            <div className="guide__wrapper">
                <h2 className="guide__title guide__title-settings">Settings</h2>
                <div className="guide__settings-container">
                    {settingsSection.map(n => (
                        <div key={n.name} className="guide__settings-wrapper">
                            <span className="guide__settings-name">{`${n.name}`}</span>
                            <p className="guide__settings-text">{n.text}</p>
                            {n.notion && <p className="guide__settings-notion">{n.notion}</p>}
                        </div>)
                    )}
                </div>
            </div>
        </div>
    )
};

export default Guide;