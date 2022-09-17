import React from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [quizzData, setQuizzData] = React.useState(() => []);
  const [selectedAnswers, setSelectedAnswers] = React.useState(
    Array(5).fill("")
  );

  function scapeStr(str) {
      return str
      .replaceAll("&amp;", "&")
      .replaceAll("&quot;",'"')
      .replaceAll("&apos;", "'")
      .replaceAll("&#039;", "'")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<");

  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((resp) => resp.json())
      .then((data) => setQuizzData(() => data.results));
  }, []);

  function toggleAnswer(id_question, answer_value) {
    if (!allowResults) {
      setSelectedAnswers((prev) =>
        prev.map((ans, i) => {
          return i == id_question ? `${answer_value}` : ans;
        })
      );
    }
  }

  const [allowResults, setAllowResults] = React.useState(false);

  function checkAnswers() {
    let result = 0;

    selectedAnswers.forEach((answer, i) => {
      if (answer == quizzData[i].correct_answer) result++;
    });
    return result;
  }

  const questionPackEl = quizzData.map((question, i) => {
    return (
      <Question
        key={i}
        title={scapeStr(question.question)}
        incorrect={question.incorrect_answers.map(text => scapeStr(text))}
        correct={scapeStr(question.correct_answer)}
        id={i}
        toggleAnswer={toggleAnswer}
        selected={selectedAnswers}
        allowResults={allowResults}
      />
    );
  });

  console.log(quizzData);
  return (
    <div className="bg-neutral-900  w-full  flex justify-center items-center">
      <div className="my-5 w-11/12 max-w-3xl p-7 md:px-12 bg-slate-100">
        {questionPackEl}
        <div className="flex gap-4 mt-5 items-center justify-center">
          {allowResults && (
            <p className="font-bold text-md">
              You score is {checkAnswers()}/{quizzData.length}{" "}
            </p>
          )}

          <button
            onClick={() => setAllowResults((old) => !old)}
            className=" bg-color1 py-3 px-7 rounded-lg text-white font-bold"
          >
            {allowResults ? "Play Again" : "Check answers "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
data = {
  response_code: 0;
  results: array(5) [
    {category:  "Animals"
    correct_answer:  "Drone"
    difficulty:  "medium"
    incorrect_answers:  (3) ['Soldier', 'Worker', 'Male']
    question:  "What is the name for a male bee that comes from an unfertilized egg?"
    type:  "multiple"},
    {}
  ]
}
*/
