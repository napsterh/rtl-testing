import React from 'react';

interface CustomInputProps {
  children: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function CustomInput({ children, value, onChange }: CustomInputProps) {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input id='search' type='text' value={value} placeholder='PlaceHolder' onChange={onChange}></input>
    </div>
  );
}

export default CustomInput;
