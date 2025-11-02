import {textField_default} from "../defaults/textField_default";

function TextField(props) {
    const {
        id,
        label,
        inputType,
        placeholder,
        defaultValue,
        value,
        required,
        error,
        customClassName,
        onChange,

    } = {...textField_default, ...props};
    const errorId = id ? id + "-error" : "";

    return (
        <div className={customClassName}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                error={error}
                className={customClassName}
                ariaInvalid={error !== ""}
                ariaDescribedBy={error ? errorId : ""}
            />
            {error !== "" && (
                <div
                    id={errorId}
                    className={"a-helper a-helper--error"}>{error}</div>
            )}

        </div>

    )
}
export default TextField;