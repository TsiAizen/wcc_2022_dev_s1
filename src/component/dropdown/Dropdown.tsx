import { ChangeEvent, FunctionComponent } from "react";

import './Dropdown.scss';

import Input from "../input/Input";
import Menu from "../menu/Menu";

interface DropdownProps {
    value: string;
    options: string[];
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelect: (item: string) => void
};

const Dropdown : FunctionComponent<DropdownProps> = ({ value, options, placeholder, onChange, onSelect } : DropdownProps) : JSX.Element => (
    <div className="dropdown">
        <div className="dropdown_input">
            <Input 
                value={value} 
                name="dropdown-input" 
                onChange={onChange} 
                placeholder={placeholder}
            />
        </div>
        <div className="dropdown_list">
            <Menu 
                options={options}
                onSelect={onSelect}
            />
        </div>
    </div>
)
export default Dropdown;