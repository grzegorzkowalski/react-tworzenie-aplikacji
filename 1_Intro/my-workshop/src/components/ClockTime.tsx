interface ClockTimeProps {
    date: Date;
}

const ClockTime: React.FC<ClockTimeProps> = ({ date }) => {
    return <h1>{date.toLocaleTimeString()}</h1>;
};

export default ClockTime;