import {  ChangeEvent, FunctionComponent } from "react";

import './Input.scss';

interface InputProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder: string
}

const Input : FunctionComponent<InputProps> = ({ value, onChange, name, placeholder } : InputProps) => (
    <input placeholder={placeholder} className="inputSearch" type="text" value={value} onChange={onChange} name={name} />
);

export default Input;