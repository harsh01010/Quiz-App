import Question from "./Question";
import Navigation from "./Navigation";
import { useState } from "react";
import "../styles/exam.css";
function Exam({ questions, setAnswers, answers, setShowResult }) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  function handleNextPrev(x) {
    setSelectedQuestion((curr) => curr + x);
  }
  return (
    <div className="exam">
      <Question
        questionDetails={questions.at(selectedQuestion)}
        total={questions.length}
        handleNextPrev={handleNextPrev}
        setAnswers={setAnswers}
        answers={answers}
      />
      <Navigation
        answers={answers}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        setShowResult={setShowResult}
      />
    </div>
  );
}
export default Exam;
