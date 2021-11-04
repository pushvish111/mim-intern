import React, { Component } from 'react';
import './Popup.css';


const Popup = props => {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick = {props.handleClose}>x</span>
                    <h1>lets create the otp verification</h1>
                </div>
            </div>
        );
};

export default Popup;