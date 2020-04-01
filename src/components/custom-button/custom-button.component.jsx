import React from 'react';
import './cusotm-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...OtherProps}) =>(
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...OtherProps}>
        { children}
    </button>
);

export default CustomButton;