import React, {JSX} from 'react';

// Komponent LikeBox
const LikeBox: React.FC = () : JSX.Element => {
    return (
        <div>
            <p>Liczba polubień: 0</p>
            <button>Polub</button>
        </div>
    );
};

export default LikeBox;