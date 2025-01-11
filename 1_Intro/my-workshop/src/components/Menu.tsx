import React, {JSX} from 'react';

interface MenuItem {
    url: string;
    text: string;
}

interface MenuProps {
    menu: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menu }) : JSX.Element => {
    return (
        <nav>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;