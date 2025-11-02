import {input_default} from "../defaults/input_default";

function input(props) {
    const{
        id,
        type,
        placeholder,
        defaultValue,
        customClassName,
        onChange,
    }={...input_default,...props}

    return (
    <input
    id={id}
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    onChange={onChange}
    className={customClassName}

    />
    )

}
export default input;