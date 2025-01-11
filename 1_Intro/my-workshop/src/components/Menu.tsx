import React, {JSX} from 'react';

// Komponent Menu
const Menu: React.FC = () : JSX.Element => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Strona główna</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/cennik">Cennik</a>
                </li>
                <li>
                    <a href="/kontakt">Kontakt</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;