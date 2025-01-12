import React, { useState } from 'react';

const Numbers: React.FC = () => {
    const initialNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    return (
        <div>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <button onClick={() => setNumbers(initialNumbers)}>Pokaż wszystkie</button>
            <button onClick={() => setNumbers(initialNumbers.filter((n) => n % 2 === 0))}>
                Pokaż tylko parzyste
            </button>
            <button onClick={() => setNumbers(initialNumbers.filter((n) => n % 2 !== 0))}>
                Pokaż nieparzyste
            </button>
        </div>
    );
};

export default Numbers;
