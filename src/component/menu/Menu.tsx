import { FunctionComponent } from "react";

import './Menu.scss';

interface MenuProps {
    options: string[];
    onSelect: (item: string) => void
};

const Menu : FunctionComponent<MenuProps> = ({ options, onSelect } : MenuProps) => {
    
    const renderCountry = () => options.map((el: string, i: number) => (
        <button onClick={() : void => onSelect(el)} className="menu_button" key={i}>{el}</button>
    ));

    return (
        <div className="menu">
            {renderCountry()}
        </div>
    );
};

export default Menu;