import React from "react";
import './index.scss';
import { Settings } from '../../';

interface PropsInput extends Settings {
    disabled?: boolean,
    key?: string,
    id: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => void,
    onFocusHandler: () => void,
}

const InputField: React.FC<PropsInput> = ({ name, value, id, onChangeHandler, options, disabled, onFocusHandler }) => (
    <div className={`main__input-wrapper ${disabled && 'main__input-wrapper--disabled'}`}>
        <h3 className="main__input-title">{name}</h3>
        {
            !options ?
                <input
                    disabled={disabled}
                    name={name}
                    type="text"
                    className="main__input-field"
                    onChange={(event) => onChangeHandler(event, id)}
                    onFocus={onFocusHandler}
                    value={value}
                />
                :
                <select
                    disabled={disabled}
                    name={name}
                    className="main__input-field"
                    onChange={(event) => onChangeHandler(event, id)}
                    value={value}
                >
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>

        }
    </div>
);

export default InputField;