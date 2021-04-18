import React, { FC } from 'react';
import { FieldError, NestDataObject } from 'react-hook-form';

type InputWithAppendProps = {
  name: string;
  label: string;
  type: string;
  value: string | number;
  errors: NestDataObject<Record<string, any>, FieldError>;
  validation: any;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  append: string;
};

export const InputWithAppend: FC<InputWithAppendProps> = (props) => {
  const {
    name,
    label,
    type,
    onChange,
    value,
    errors,
    validation,
    append,
    className,
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        <input
          type={type}
          className={`form-control ${className}`}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          ref={validation}
        />
        <div className="input-group-prepend">
          <span className="input-group-text">{append}</span>
        </div>
      </div>
      {errors[name] && errors[name].type === 'required' && (
        <i className="text-danger">{label} je povinný údaj.</i>
      )}
    </div>
  );
};
