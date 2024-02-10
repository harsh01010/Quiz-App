import { useEffect, useState } from "react";

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
      return pastAns.map((ans) =>
        ans.qNo !== qNo
          ? ans
          : {
              ...ans,
              solved: true,
              selectedOption: oNo,
              score: oNo === ans.correctOption?.oNo ? ans.pScore : ans.nScore,
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
  //console.log(total, qNo);
  return (
    <section>
      <div>
        <div>
          <span>
            Q no. : {qNo}
            {"  " + summary}
          </span>
          <span>
            +{marks.positive}/-{marks.negative}
          </span>
        </div>

        <div>
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

      <div>
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
          onClick={() => handleSelectOption(option?.oNo)}
        />
        {option.text}
      </span>
    </li>
  );
}
