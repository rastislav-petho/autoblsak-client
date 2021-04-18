import React, { FC } from 'react';
import { FieldError, NestDataObject } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type: string;
  value: string | number;
  errors: NestDataObject<Record<string, any>, FieldError>;
  validation: any;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = (props) => {
  const {
    name,
    label,
    type,
    onChange,
    value,
    errors,
    validation,
    className,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        type={type}
        className={`form-control ${className}`}
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
