import React, {JSX, useEffect, useState} from 'react';

interface StrobeLightProps {
    color: string;
    frequency: number;
}

const StrobeLight: React.FC<StrobeLightProps> = ({color, frequency}) : JSX.Element => {
    const [backgroundColor, setbackgroundColor] = useState<string>("white");

    useEffect(() => {
       const intervalID = setInterval(() => {
           setbackgroundColor(prevState => prevState === "white" ? color : "white");
       }, frequency);
       console.log(intervalID);
       return () => {clearInterval(intervalID);};
    }, [color, frequency]);

    return (
        <div style={{
            width: 500,
            height: 50,
            backgroundColor
        }} />
    );
};

export default StrobeLight;