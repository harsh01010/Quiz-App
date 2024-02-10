import Question from "./Question";
import Navigation from "./Navigation";
import { useState } from "react";
function Exam({ questions, setAnswers, answers }) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  function handleNextPrev(x) {
    setSelectedQuestion((curr) => curr + x);
  }
  return (
    <div>
      <Question
        questionDetails={questions.at(selectedQuestion)}
        total={questions.length}
        handleNextPrev={handleNextPrev}
        setAnswers={setAnswers}
        answers={answers}
      />
      <Navigation questions={questions} />
    </div>
  );
}
export default Exam;
