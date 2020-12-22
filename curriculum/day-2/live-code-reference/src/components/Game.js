import React, { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import Lives from "./Lives";
import ProgressBar from "./ProgressBar";
import Stack from "./Stack";

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randchoice = (list) => {
  return list[randint(0, list.length - 1)];
};

const question_types = [
  {
    symbol: "+",
    method: (a, b) => a + b,
  },
  {
    symbol: "-",
    method: (a, b) => a - b,
  },
  {
    symbol: "*",
    method: (a, b) => a * b,
  },
];

const initial_time = 30; // seconds
const initial_lives = 4;

const generate_new_question = () => {
  const { symbol, method } = randchoice(question_types);
  const a = randint(0, 12);
  const b = randint(0, 12);

  return {
    question: `${a} ${symbol} ${b} = ?`,
    answer: method(a, b),
  };
};

const Game = ({ onGameover }) => {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(initial_time);
  const [lives, setLives] = useState(initial_lives);

  // get a new question
  const new_question = () => {
    setQuestion(generate_new_question());
  };

  // end the game
  const end_game = () => {
    onGameover(score);
  };

  // make a guess
  const guess = (response) => {
    // parse the repsonse as an integer
    const number_response = parseInt(response);

    // if the response is the answer
    if (number_response === question.answer) {
      new_question();
      setScore(score + 1);
      setTime(time + 1);
    }

    // otherwise take a life
    else {
      take_life();
    }
  };

  const take_life = () => {
    if (lives > 1) {
      setLives(lives - 1);
      new_question();
    } else end_game();
  };

  // decrement the time
  const tick_time = () => {
    setTime((time) => {
      // end the game if zero
      if (time == 0) end_game();

      // decrement the time
      return time - 1;
    });
  };

  useEffect(() => {
    const timer_interval = setInterval(tick_time, 1000);
    return () => {
      clearInterval(timer_interval);
    };
  }, [time]);

  // generate a new question on start
  useEffect(() => {
    new_question();
  }, []);

  return (
    <Stack>
      <div className="mb-2">
        <Lives current={lives} max={initial_lives} />
      </div>
      <div className="mb-7">
        <ProgressBar percentage={(time / initial_time) * 100} />
      </div>
      <div className="text-4xl mb-1">Question {score + 1}</div>
      <div className="text-7xl font-bold mb-10">
        {question ? question.question : null}
      </div>

      <AnswerInput onGuess={guess} />
    </Stack>
  );
};

export default Game;
