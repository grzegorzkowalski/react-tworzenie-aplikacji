import React, { useState } from 'react';

interface CrazyDivProps {
    min: number;
    max: number;
}

interface PositionProps {
    top: number;
    left: number;
}

const CrazyDiv: React.FC<CrazyDivProps> = ({ min, max }) => {
    const [position, setPosition] = useState<PositionProps>({ top: 0, left: 0 });

    const handleHover: React.MouseEventHandler<HTMLDivElement> | undefined = () : void => {
        const randomTop: number = Math.random() * (max - min) + min;
        const randomLeft: number = Math.random() * (max - min) + min;
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
        />
    );
};

export default CrazyDiv;
