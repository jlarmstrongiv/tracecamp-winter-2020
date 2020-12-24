import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import Stack from "./Stack";

// generates a random integer between min and max
// including both min and max as posibilities
const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// the math game component
// when the component is instanced and rendered
// for the first time the game has started
const Game = ({ onGameover }) => {
  // number of questions answered right
  const [score, setScore] = useState(0);

  // two opperands
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // generates a new question
  const new_question = () => {
    // set `a` and `b` to two different
    // random integers between 1 and 10
    setA(randint(1, 10));
    setB(randint(1, 10));
  };

  // check the provided guess (`response`)
  // will be called from the AnswerInput component
  const guess = (response) => {
    // check if the response is equal to the answer
    if (response == a + b) {
      // generate a new question
      new_question();

      // and add to the score
      setScore(score + 1);
    }

    // otherwise the user entered the wrong answer
    // and the game is over
    else {
      onGameover(score);
    }
  };

  // generate a new question when the component mounts
  // (ie. when the game starts)
  useEffect(() => {
    new_question();
  }, []);

  // render out the component
  // (stack of elements, which will be put within a center on the main page)
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
