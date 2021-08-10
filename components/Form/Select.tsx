import React from 'react';
import { FieldError, NestDataObject } from 'react-hook-form';

type SelectProps = {
  name: string;
  label: string;
  validation: any;
  value: string;
  options: any[];
  errors: NestDataObject<Record<string, any>, FieldError>;
  className?: string;
  decode: () => string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = (props) => {
  const {
    name,
    label,
    validation,
    value,
    options,
    onChange,
    errors,
    decode,
    className,
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
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      {errors[name] && errors[name].type === 'required' && (
        <i className="text-danger">{label} je povinný údaj.</i>
      )}
    </div>
  );
};
