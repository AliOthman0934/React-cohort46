import React from 'react';
import ReactDOM from 'react-dom';

const Alert = ({ message }) => {
    return ReactDOM.createPortal(
        <div className="alert alert-danger" role="alert">
            {message}
        </div>,
        document.getElementById('alert-root') 
    );
};

export default Alert;
