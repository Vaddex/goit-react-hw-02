import css from "./Options.module.css";

export const Options = ({
    updateFeedback,
    resetFeedback,
    totalFeedbackCount,
}) => {
    return (
        <div className={css.container}>
            <button
                className={css.buttons}
                onClick={() => updateFeedback("good")}
            >
                Good
            </button>
            <button
                className={css.buttons}
                onClick={() => updateFeedback("neutral")}
            >
                Neutral
            </button>
            <button
                className={css.buttons}
                onClick={() => updateFeedback("bad")}
            >
                Bad
            </button>
            {!!totalFeedbackCount && (
                <button className={css.buttons} onClick={resetFeedback}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
