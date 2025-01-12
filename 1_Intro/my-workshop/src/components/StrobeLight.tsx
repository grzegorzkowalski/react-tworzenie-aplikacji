import React, { useState, useEffect } from 'react';

interface StrobeLightProps {
    color: string; // Kolor światła
    frequency: number; // Częstotliwość mrugania w ms
}

const StrobeLight: React.FC<StrobeLightProps> = ({ color, frequency }) => {
    const [backgroundColor, setBackgroundColor] = useState<string>('white');

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundColor((prevColor) => (prevColor === 'white' ? color : 'white'));
        }, frequency);

        return () => clearInterval(interval); // Czyszczenie interwału przy odmontowaniu
    }, [color, frequency]);

    return (
        <div
            style={{
                width: '500px',
                height: '50px',
                backgroundColor: backgroundColor,
            }}
        ></div>
    );
};

// Główny komponent aplikacji
const App: React.FC = () => {
    return (
        <div className="App">
            <StrobeLight color="yellow" frequency={100} />
            <StrobeLight color="pink" frequency={200} />
            <StrobeLight color="magenta" frequency={50} />
        </div>
    );
};

export default App;