import css from "./Feedback.module.css";

export default function Feedback() {
    return (
        <div className={css.container}>
            <p>Good: </p>
            <p>Neutral: </p>
            <p>Bad: </p>
            <p>Total: </p>
            <p>Positive: </p>
        </div>
    );
}
