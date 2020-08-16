import React from 'react';

export const Textarea = props => {
  const { name, label, rows, onChange, value, className } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        className={`form-control ${className}`}
        id={name}
        name={name}
        rows={rows}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};
