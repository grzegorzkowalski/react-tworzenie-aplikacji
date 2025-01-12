import React, { useState } from 'react';

const Counter: React.FC = () => {
    const initialCount = 10;
    const [count, setCount] = useState<number>(initialCount);

    return (
        <div>
            <h2>Liczba kliknięć: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    );
};

export default Counter;
