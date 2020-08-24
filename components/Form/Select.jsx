import React from 'react';

export const Select = props => {
  const {
    name,
    label,
    validation,
    value,
    options,
    onChange,
    errors,
    decode,
    className
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        className={`form-control ${className}`}
        name={name}
        id={name}
        ref={validation}
      >
        {value ? (
          <option value={value}>{decode ? decode : value}</option>
        ) : (
          <option></option>
        )}
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      {errors[name] && errors[name].type === 'required' && (
        <i className="text-danger">{label} je povinný údaj.</i>
      )}
    </div>
  );
};
