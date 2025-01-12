const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">E-Commerce</a>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/collection">Collection</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
