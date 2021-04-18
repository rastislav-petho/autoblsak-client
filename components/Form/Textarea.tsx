import React, { FC } from 'react';

type TextareaProps = {
  name: string;
  label: string;
  rows: number;
  value: string;
  className?: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

export const Textarea: FC<TextareaProps> = (props) => {
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
