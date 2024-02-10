import { useEffect, useState } from "react";
import "../styles/question.css";

export default function Question({
  questionDetails,
  total,
  handleNextPrev,
  setAnswers,
  answers,
}) {
  const { qNo, summary, options, marks } = questionDetails;
  function handleSelectOption(oNo) {
    setChecked(oNo);
    setAnswers(function (pastAns) {
      const correctOption = options.filter(
        (option) => option.isCorrect === true
      );
      return pastAns.map((ans) =>
        ans.qNo !== qNo
          ? ans
          : {
              ...ans,
              solved: true,
              selectedOption: oNo,
              score: oNo === correctOption[0].oNo ? ans.pScore : ans.nScore,
            }
      );
    });
  }

  const [checked, setChecked] = useState(answers[qNo - 1].selectedOption);
  useEffect(
    function () {
      setChecked(answers[qNo - 1].selectedOption);
      console.log(answers);
    },
    [qNo]
  );

  return (
    <section className="question">
      <div className="questionDetailWithOption">
        <div className="questionDetails">
          <span className="lgtext">
            {" "}
            {"Q." + qNo}
            {":"} <span> {summary} </span>
          </span>
          <span className="lg">
            +{marks.positive}/-{marks.negative}
          </span>
        </div>

        <div className="options">
          <ul>
            {options.map((curr) => (
              <Option
                option={curr}
                checked={checked === curr.oNo}
                handleSelectOption={handleSelectOption}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="navigationButtons">
        <button disabled={qNo <= 1} onClick={() => handleNextPrev(-1)}>
          {" "}
          &larr; Previous
        </button>
        <button disabled={qNo === total} onClick={() => handleNextPrev(1)}>
          Next &rarr;
        </button>
      </div>
    </section>
  );
}

function Option({ option, checked, handleSelectOption }) {
  return (
    <li>
      <span>
        <input
          type="radio"
          checked={checked}
          onChange={() => handleSelectOption(option?.oNo)}
          className="radio"
        />
        {option.text}
      </span>
    </li>
  );
}
