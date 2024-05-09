import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialFeedbackState = { good: 0, neutral: 0, bad: 0 };
function App() {
    const [feedbackValue, setFeedbackValue] = useState(() => {
        const storedFeedbackData = localStorage.getItem("feedback");
        return JSON.parse(storedFeedbackData) ?? initialFeedbackState;
    });

    const updateFeedbackCount = (feedbackType) => {
        setFeedbackValue((firstdata) => ({
            ...firstdata,
            [feedbackType]: firstdata[feedbackType] + 1,
        }));
    };

    const totalFeedbackCount = Object.values(feedbackValue).reduce(
        (acc, curr) => acc + curr,
        0
    );

    const totalPositive = Math.round(
        ((feedbackValue.good + feedbackValue.neutral) / totalFeedbackCount) *
            100
    );

    const resetFeedback = () => {
        setFeedbackValue(initialFeedbackState);
    };

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedbackValue));
    }, [feedbackValue]);

    return (
        <div>
            <Description />
            <Options
                updateFeedback={updateFeedbackCount}
                resetFeedback={resetFeedback}
                totalFeedbackCount={totalFeedbackCount}
            />
            {totalFeedbackCount !== 0 ? (
                <Feedback
                    {...feedbackValue}
                    total={totalFeedbackCount}
                    totalPositive={totalPositive}
                />
            ) : (
                <Notification />
            )}
        </div>
    );
}
export default App;
