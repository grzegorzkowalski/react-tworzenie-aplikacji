import React, { useState } from 'react';

interface CrazyDivProps {
    min: number;
    max: number;
}

const CrazyDiv: React.FC<CrazyDivProps> = ({ min, max }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const handleHover = () => {
        const randomTop = Math.random() * (max - min) + min;
        const randomLeft = Math.random() * (max - min) + min;
        setPosition({ top: randomTop, left: randomLeft });
    };

    return (
        <div
            onMouseEnter={handleHover}
            style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                top: position.top,
                left: position.left,
            }}
        ></div>
    );
};

export default CrazyDiv;
