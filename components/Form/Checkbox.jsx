import React from 'react';

export const Checkbox = props => {
  const { name, key, value, onChange, checked } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        id={name}
        key={key}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {value}
      </label>
    </div>
  );
};
