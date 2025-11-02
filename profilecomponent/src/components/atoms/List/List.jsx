import React from 'react';
import Button from '../button/Button';
import { list_defaults } from '../defaults/list_defaults';

const variantMap = {
    dropdown: 'a-list--dropdown',
    inline: 'a-list--inline',
};

const List = ({
    items = list_defaults.items,
    customClassName = list_defaults.customClassName,
    variant = list_defaults.variant,
}) => {
    const variantClass = variantMap[variant] || variantMap.dropdown;

    return (
        <ul className={`a-list ${variantClass} ${customClassName}`}>
            {items.map((item, index) => (
                <li key={index} className="a-list__item">
                    <Button
                        variant="link"
                        onClick={item.onClick}
                        customClassName="a-list__link"
                    >
                        {item.label}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default List;