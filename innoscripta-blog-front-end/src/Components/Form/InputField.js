import React from 'react';

function InputField({ label = "label", placeholder = "", className, type = "", name = "", value = "", help, onChange }) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type={type} className={`form-control ${className}`} placeholder={placeholder} name={name} onChange={onChange} />
            <div className="form-text">
                {help}
            </div>
        </div>
    );
}

export default InputField;