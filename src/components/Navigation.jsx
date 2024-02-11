import "../styles/navigation.css";
export default function Navigation({
  answers,
  selectedQuestion,
  setSelectedQuestion,
  setShowResult,
}) {
  function handleClick(x) {
    console.log(x);
    setSelectedQuestion(x);
  }
  return (
    <>
      <div className="navigation">
        {answers.map((curr) => (
          <div
            onClick={() => handleClick(curr.qNo - 1)}
            className={
              curr.qNo === selectedQuestion + 1
                ? "blue navigationBox"
                : curr.solved === true
                ? "green navigationBox"
                : "red navigationBox"
            }
          >
            {curr.qNo}
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowResult((curr) => true)}
        className="submitBtn"
      >
        Submit Exam
      </button>
    </>
  );
}
