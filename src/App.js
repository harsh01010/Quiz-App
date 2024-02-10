import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Exam from "./components/Exam";
import questions from "./components/questions";

function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showExam, setShowExam] = useState(null);
  const [answers, setAnswers] = useState(() => {
    return questions.map((question) => ({
      qNo: question.qNo,
      solved: false,
      pScore: question.marks.positive,
      nScore: question.marks.negative,
      correctOption: question.options.some((option) => option.isCorrect)?.oNo,
      selectedOption: null,
      score: 0,
    }));
  });

  return (
    <>
      {showExam ? (
        <Exam
          questions={questions}
          setAnswers={setAnswers}
          answers={answers}
        ></Exam>
      ) : (
        <Login
          userName={userName}
          setUserName={setUserName}
          passWord={passWord}
          setPassWord={setPassWord}
          setShowExam={setShowExam}
        ></Login>
      )}
    </>
  );
}

export default App;
