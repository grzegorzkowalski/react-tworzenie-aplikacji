import React, { useState, useEffect } from 'react';

const NumberRandomInfo: React.FC = () => {
    const [randomNumber, setRandomNumber] = useState<number>(Math.ceil(Math.random() * 5));

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNumber(Math.ceil(Math.random() * 5));
        }, 1000);

        return () => clearInterval(interval); // Czyszczenie interwału przy odmontowywaniu
    }, []);

    return (
        <div>
            {randomNumber > 3 ? (
                <p>
                    {randomNumber} - Większa od 3
                </p>
            ) : (
                <p>
                    {randomNumber} - Mniejsza od 3
                </p>
            )}
        </div>
    );
};

export default NumberRandomInfo;
