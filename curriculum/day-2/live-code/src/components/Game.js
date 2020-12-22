import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import Stack from "./Stack";

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Game = ({ onGameover }) => {
  // number of questions answered right
  const [score, setScore] = useState(0);

  // two opperands
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // generates two new opperands
  const new_question = () => {
    setA(randint(1, 10));
    setB(randint(1, 10));
  };

  const guess = (response) => {
    if (response == a + b) {
      new_question();
      setScore(score + 1);
    } else {
      onGameover(score);
    }
  };

  useEffect(() => {
    new_question();
  }, []);

  return (
    <Stack>
      <div className="text-4xl mb-2">Question: {score + 1}</div>
      <div className="text-7xl font-bold mb-10">
        {a} + {b} = ?
      </div>
      <AnswerInput onGuess={guess} />
    </Stack>
  );
};

export default Game;
