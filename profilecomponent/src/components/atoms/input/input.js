import React from 'react';
import { input_defaults } from '../defaults/input_defaults';
import './input.css';   // <-- pulls everything
const Input = ({
    type = input_defaults.type,
    placeholder = input_defaults.placeholder,
    value = input_defaults.value,
    onChange = input_defaults.onChange,
    disabled = input_defaults.disabled,
    customClassName = input_defaults.customClassName,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`a-input ${customClassName}`}
        />
    );
};

export default Input;