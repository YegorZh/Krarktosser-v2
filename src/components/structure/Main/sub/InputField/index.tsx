import React from "react";
import './index.scss';
import { Settings } from '../../';

interface PropsInput extends Settings {
    key?: string,
    id: string,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => void,
}

const InputField: React.FC<PropsInput> = ({ name, value, id, onChangeHandler, options }) => (
    <div className="main__input-wrapper">
        <h3 className="main__input-title">{name}</h3>
        <input
            name={name}
            type="number"
            className="main__input-field"
            onChange={(event) => onChangeHandler(event, id)}
            value={value}
        />
    </div>
);

export default InputField;