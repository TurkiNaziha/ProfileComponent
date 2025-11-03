import React from 'react';
import { label_defaults } from '../defaults/label_defaults';

const Label = ({
    htmlFor = label_defaults.htmlFor,
    children = label_defaults.children,
    customClassName = label_defaults.customClassName,
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`a-label ${customClassName}`}
        >
            {children}
        </label>
    );
};

export default Label;