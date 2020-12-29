import { useState } from "react";

const AnswerInput = (props) => {
  const [response, setResponse] = useState("");

  props.onGameover;

  const handle_change = (event) => {
    const value = event.target.value;
    setResponse(value);
  };

  const guess = () => {
    props.onGuess(response);
    setResponse("");
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Answer"
        value={response}
        onChange={handle_change}
        className="w-52 p-2 border-2 border-gray-300 rounded mr-2"
      />
      <button
        onClick={guess}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;
