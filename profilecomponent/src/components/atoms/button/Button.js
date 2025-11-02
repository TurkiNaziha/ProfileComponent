import {button_defaults, button_variant_classnames} from "../defaults/button_default";

function Button(props) {
    const {
        type,
        disabled,
        onClick,
        children,
        customClassName,
        variant,

    } = {...button_defaults, ...props};
    const variantClass = button_variant_classnames[variant];
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={variantClass+""+customClassName}


        >{children}</button>
    );
}

export default Button