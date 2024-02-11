import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Exam from "./components/Exam";
import questions from "./components/questions";
import Result from "./components/Result";

function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showExam, setShowExam] = useState(null);
  const [answers, setAnswers] = useState(() => {
    return questions.map((question) => ({
      qNo: question.qNo,
      solved: false,
      pScore: question.marks.positive,
      nScore: -question.marks.negative,
      selectedOption: null,
      score: 0,
    }));
  });
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      {!showResult ? (
        showExam ? (
          <Exam
            questions={questions}
            setAnswers={setAnswers}
            answers={answers}
            setShowResult={setShowResult}
          ></Exam>
        ) : (
          <Login
            userName={userName}
            setUserName={setUserName}
            passWord={passWord}
            setPassWord={setPassWord}
            setShowExam={setShowExam}
          ></Login>
        )
      ) : (
        <Result answers={answers} />
      )}
    </>
  );
}

export default App;
