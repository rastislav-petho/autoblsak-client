import React from 'react';

export const Checkbox = props => {
  const { name, value, onChange, checked, className } = props;
  return (
    <div className="form-check">
      <input
        className={`form-check-input ${className}`}
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {value}
      </label>
    </div>
  );
};
