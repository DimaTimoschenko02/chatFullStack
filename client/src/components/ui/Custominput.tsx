import React from 'react';


interface IInputProps {

    onChange?: (e: string | React.ChangeEvent<any>) => void;
    value: string | undefined;
    placeholder? : string;
    error?: string
}

export default function CustomInput({ ...props }: IInputProps) {
  return (
    <input
      value={!!props.value ? props.value : '' }
      onChange={props.onChange}
      placeholder={props.placeholder}
      //helperText={props.error}
      color={!!props.error ? 'error' : 'primary'}
    />
  );
}