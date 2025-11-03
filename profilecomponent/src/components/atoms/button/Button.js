import React from 'react';
import { button_defaults, button_variant_classnames } from '../defaults/button_default';
import './button.css';   // <-- pulls everything
const Button = ({
    variant = button_defaults.variant,
    type = button_defaults.type,
    disabled = button_defaults.disabled,
    customClassName = button_defaults.customClassName,
    onClick = button_defaults.onClick,
    children = button_defaults.children,
}) => {
    const baseClass = 'a-button';
    const variantClass = button_variant_classnames[variant] || button_variant_classnames.primary;

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseClass} ${variantClass} ${customClassName}`}
        >
            {children}
        </button>
    );
};

export default Button;