import css from "./Feedback.module.css";

export const Feedback = ({ good, neutral, bad, total, totalPositive }) => {
    return (
        <ul className={css.container}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {totalPositive}%</li>
        </ul>
    );
};

export default Feedback;
