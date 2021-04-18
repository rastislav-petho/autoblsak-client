import React, { FC } from 'react';

type CheckboxProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = (props) => {
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
