import React from "react";
import './index.scss';

const Guide: React.FC = () => {
    const settingsSection = [
        { name: 'Amount', text: ['How many coins to throw.'] },
        {
            name: 'Flip until you lose', text: [
                'Will stop the flipping process if a side opposite to the chosen one comes out as a result.\nCan be set to Off, Heads or Tails.']
        },
        {
            name: `Krark's Thumb`,
            text: [
                `How many cards named "Krark's Thumb" you have in play.`,
                `For each you throw 2 coins exponentially and choose one of them for the outcome.` +
                ` Meaning that at the value of 1 you throw 2 coins, at the value of 2 — 4, 3 — 8, 4 — 16, etc.`,
            ],
            notion: `Settings listed below won't take effect unless Krark's Thumb is larger than 0.`
        },
        {
            name: `Priority`,
            text: [`Which side to try to choose with "Krark's Thumb" effect. None, Heads or Tails.`]
        },
        {
            name: `Even spread`,
            text: [
                `If On tries to even out results, always choosing with "Krark's Thumb" effect the side that currently has the lowest outcome.`,
                `For example having 2 Heads and 3 Tails going to make the program to try to choose heads during next flip.`
            ],
            notion:
                'Following settings are extra advanced. It\'s adviced to ignore them if you don\'t know if you need them.' +
                '\nIf you want to understand them set Krark\'s Thumb to 10 and experiment.'
        },
        { name: `Min priority`, text: [`Minimum value to try and achieve for prioritized side.`] },
        { name: `Max priority`, text: [`Maximum value for prioritized side. Once achieved tries to maximize secondary side.`] },
        { name: `Min secondary`, text: [`Minimum value to try and achieve for secondary side.`] },
        {
            name: `Max secondary`, text: [`Maximum value for secondary side. Once achieved tries to maximize prioritized side.`],
            notion:
                `If any of the parameters overlap given priority is used:` +
                `\nMax Priority > Max Secondary > Min Priority > Min Secondary > Even Spread > Priority`
        },
    ]

    return (
        <div className="main__guide">
            <div className="guide__wrapper">
                <h2 className="guide__title">What's this app about?</h2>
                <p className="guide__text">
                    The main feature of this application is coin tossing without hussle.
                    You specify the amount and get results, without waiting or tedious animations.
                    Advanced settings allow you to manipulate your outcomes,
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
                            {n.text.map(text => <p key={text} className="guide__settings-text">{text}</p>)}
                            {n.notion && <p className="guide__settings-notion">{n.notion}</p>}
                        </div>)
                    )}
                </div>
            </div>
        </div>
    )
};

export default Guide;