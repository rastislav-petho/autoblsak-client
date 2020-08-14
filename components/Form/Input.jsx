import React from 'react';

export const Input = props => {
  const { name, label, type, onChange, value, errors, validation } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        ref={validation}
      />

      {errors[name] && errors[name].type === 'required' && (
        <i className="text-danger">{label} je povinný údaj.</i>
      )}
    </div>
  );
};
