import React from 'react';
import './cusotm-button.styles.scss';

const CustomButton = ({ children, ...OtherProps}) =>(
    <button className='custom-button' {...OtherProps}>
        { children}
    </button>
);

export default CustomButton;