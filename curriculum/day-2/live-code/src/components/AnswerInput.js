import { useState } from "react";

const AnswerInput = ({ onGuess }) => {
  const [response, setResponse] = useState("");

  const guess = () => {
    if (response.trim() === "") return;

    onGuess(response);

    setResponse("");
  };

  const handle_response = (event) => {
    const value = event.target.value;
    setResponse(value);
  };

  const handle_keypress = (event) => {
    if (event.key === "Enter") guess();
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Answer"
        value={response}
        onChange={handle_response}
        onKeyDown={handle_keypress}
        className="w-52 p-2 border-2 border-gray-300 rounded mr-2"
      />
      <button
        onClick={guess}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;
