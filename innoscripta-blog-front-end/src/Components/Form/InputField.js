import React from 'react';

function InputField({ label = "label", placeholder = "", className, type = "", name = "", value = "", help, onChange }) {
    return (
        <div className="m-3 form-floating">
            <input id={name} type={type} className={`form-control ${className}`} placeholder={placeholder} name={name} onChange={onChange} />
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="form-text">
                {help}
            </div>
        </div>
    );
}

export default InputField;