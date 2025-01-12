import React, {useState, JSX} from 'react';

const Numbers: React.FC = () : JSX.Element => {
    const initialData = [54,76,24,63,4,54,82,36,13,80,10,69,4,23,40];
    const [numbers, setNumbers] = useState<number[]>(initialData);

    const clickOddHandler = () => {
        setNumbers(numbers.filter(el => el % 2 !== 0))
    }

    return (
        <div>
            <ul>
                {numbers.map((item, index) => <li key={`${index}_${item}`}>{item}</li> )}
            </ul>
            <button onClick={() => setNumbers(numbers.filter(el => el % 2 === 0))}>Tylko parzyste</button>
            <button onClick={() => setNumbers(initialData)}>Wszystkie</button>
            <button onClick={clickOddHandler}>Tylko nieparzyste</button>
        </div>
    );
};

export default Numbers;