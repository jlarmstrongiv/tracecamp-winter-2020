import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import ProgressBar from "./ProgressBar";
import Lives from "./Lives";

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randchoice = (list) => {
  return list[randint(0, list.length - 1)];
};

const initial_time = 60;
const initial_lives = 3;

const binaryOp = (op_char, op_func) => () => {
  const a = randint(1, 12);
  const b = randint(1, 12);
  return {
    display: `${a} ${op_char} ${b} = ?`,
    answer: op_func(a, b),
  };
};

const question_types = [
  binaryOp("+", (a, b) => a + b),
  binaryOp("-", (a, b) => a - b),
  binaryOp("*", (a, b) => a * b),
  binaryOp("mod", (a, b) => a % b),
];

const Game = (props) => {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(initial_time);
  const [lives, setLives] = useState(initial_lives);

  const new_question = () => {
    const { display: new_display, answer: new_answer } = randchoice(
      question_types
    )();

    setDisplay(new_display);
    setAnswer(new_answer);
  };

  useEffect(new_question, []);

  const tick_time = () => {
    setTime((time) => {
      return time - 1;
    });
  };

  useEffect(() => {
    const tick_interval = setInterval(tick_time, 1000);
    return () => {
      clearInterval(tick_interval);
    };
  }, []);

  useEffect(() => {
    if (time <= 0) {
      props.onGameover(score);
    }
  }, [time, score]);

  const guess = (response) => {
    const int_response = parseInt(response);
    if (int_response == answer) {
      setScore(score + 1);
      new_question();
    } else if (lives == 1) {
      props.onGameover(score);
    } else {
      setLives(lives - 1);
      new_question();
    }
  };

  const progress_percentage = (time / initial_time) * 100;

  return (
    <>
      <div className="mb-2">
        <Lives current={lives} max={initial_lives} />
      </div>
      <div className="mb-3">
        <ProgressBar percentage={progress_percentage} />
      </div>
      <div className="text-4xl mb-2">Question: {score + 1}</div>
      <div className="text-7xl font-bold mb-10">{display}</div>
      <AnswerInput onGuess={guess} />
    </>
  );
};

export default Game;
