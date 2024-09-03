import React, { useState, useEffect } from 'react';

const DateDisplay: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Los_Angeles',
        timeZoneName: 'short',
    });

    return (
        <div style={{ position: 'relative', padding: "5px", width: '100%', display: 'flex', justifyContent: 'right', alignItems: 'right', flexDirection: 'row', margin: '2px' }}>
            <span style={{ color: 'black', fontWeight: 'bold'  }}>{formattedDate}{'::'}{formattedTime}</span>
        </div>
    );
};

export default DateDisplay;