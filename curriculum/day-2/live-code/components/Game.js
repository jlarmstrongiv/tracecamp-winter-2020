import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Game = (props) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [score, setScore] = useState(0);

  const new_question = () => {
    setA(randint(0, 10));
    setB(randint(0, 10));
  };

  useEffect(new_question, []);

  const guess = (response) => {
    const int_response = parseInt(response);
    if (int_response == a + b) {
      setScore(score + 1);
      new_question();
    } else {
      props.onGameover(score);
    }
  };

  return (
    <>
      <div className="text-4xl mb-2">Question: {score + 1}</div>
      <div className="text-7xl font-bold mb-10">
        {a} + {b} = ?
      </div>
      <AnswerInput onGuess={guess} />
    </>
  );
};

export default Game;
