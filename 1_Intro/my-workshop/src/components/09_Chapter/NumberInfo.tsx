import React from 'react';

// Funkcja sprawdzająca, czy liczba jest liczbą pierwszą
const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Funkcja sprawdzająca, czy liczba jest potęgą liczby 2
const isPowerOfTwo = (num: number): boolean => {
    return (Math.log2(num) % 1 === 0);
};

interface NumberInfoProps {
    number: number;
}

const NumberInfo: React.FC<NumberInfoProps> = ({ number }) => {
    return (
        <ul>
            <li>Liczba: {number}</li>
            <li>{number % 2 === 0 ? 'Parzysta' : 'Nieparzysta'}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {isPowerOfTwo(number) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;
