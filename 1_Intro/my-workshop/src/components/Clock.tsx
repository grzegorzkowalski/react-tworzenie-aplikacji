import React, { useState, useEffect } from 'react';
import ClockTime from "./ClockTime.tsx";
import ClockDate from "./ClockDate.tsx";

const Clock: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval); // Czyszczenie interwału przy odmontowaniu
    }, []);

    return (
        <div>
            <ClockTime date={currentDate} />
            <ClockDate date={currentDate} />
        </div>
    );
};

export default Clock;