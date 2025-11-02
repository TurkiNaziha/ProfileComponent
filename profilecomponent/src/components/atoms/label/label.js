import {label_default} from "../defaults/label_default";

function label(props) {
    const {
        htmlFor,
        children,
        customClassName,

    } = {...label_default, ...props};

    return (
        <label
            htmlFor={htmlFor}
            className={customClassName}
        > {children}</label>
    )
}
export default label