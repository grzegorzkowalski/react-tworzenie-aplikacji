import React, {JSX} from 'react';

interface LikeBoxProps {
    likes: number;
}

const LikeBox: React.FC<LikeBoxProps> = ({ likes }) : JSX.Element => {
    return (
        <div>
            <p>Liczba polubień: {likes}</p>
            <button>Polub</button>
        </div>
    );
};

export default LikeBox;