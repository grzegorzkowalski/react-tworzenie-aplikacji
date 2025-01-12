interface ClockDateProps {
    date: Date;
}

const ClockDate: React.FC<ClockDateProps> = ({ date }) => {
    return <h1>{date.toLocaleDateString()}</h1>;
};

export default ClockDate;