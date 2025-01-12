import React, { useState } from 'react';

const CountThings: React.FC = () => {
    const [balance, setBalance] = useState<number>(10000);
    const [age, setAge] = useState<number>(30);

    return (
        <div>
            <p>💰 So much money: ${balance}</p>
            <p>Age: {age}</p>
            <button onClick={() => setBalance(balance + 1000)}>Get rich!</button>
            <button onClick={() => setAge(age + 1)}>Get older :(</button>
        </div>
    );
};

export default CountThings;
