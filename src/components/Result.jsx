import "../styles/result.css";
import questions from "./questions";
export default function ({ answers }) {
  const scored = answers.reduce((acc, curr) => acc + curr.score, 0);
  const totalScore = answers.reduce((acc, curr) => acc + curr.pScore, 0);
  const correctAns = answers.filter((curr) => curr.score > 0);
  const incorrectAns = answers.filter((curr) => curr.score < 0);
  const notAttempted = answers.filter((curr) => curr.score === 0);

  const redText = { color: "red" };
  const greenText = { color: "green" };
  const blueText = { color: "blue" };
  return (
    <div className="result">
      <div className="score">
        <span>
          Your Score: {scored}/ Total Scorable: {totalScore}
        </span>
      </div>
      <div className="details">
        <div className="detail">
          <p>Correct Submissions</p>{" "}
          {correctAns.map((curr) => (
            <Display qn={questions[curr.qNo - 1]} style={greenText} />
          ))}
        </div>
        <div className="detail">
          <p>Incorrect Submissions</p>{" "}
          {incorrectAns.map((curr) => (
            <Display qn={questions[curr.qNo - 1]} style={redText} />
          ))}
        </div>
        <div className="detail">
          <p>Unattempted</p>{" "}
          {notAttempted.map((curr) => (
            <Display qn={questions[curr.qNo - 1]} style={blueText} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Display({ qn, style }) {
  return (
    <p style={style}>
      {qn.qNo}: {qn.summary}
    </p>
  );
}
