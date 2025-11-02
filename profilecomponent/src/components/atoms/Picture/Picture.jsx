import React from 'react';
import { picture_defaults } from '../defaults/picture_defaults';

const sizeMap = {
    small: 'a-picture--small',
    medium: 'a-picture--medium',
    large: 'a-picture--large',
};

const Picture = ({
    src = picture_defaults.src,
    alt = picture_defaults.alt,
    size = picture_defaults.size,
    customClassName = picture_defaults.customClassName,
}) => {
    const sizeClass = sizeMap[size] || sizeMap.medium;

    return (
        <img
            src={src}
            alt={alt}
            className={`a-picture ${sizeClass} ${customClassName}`}
        />
    );
};

export default Picture;