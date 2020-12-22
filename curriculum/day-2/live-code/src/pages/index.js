import { useState } from "react";
import Center from "../components/Center";
import MainMenu from "../components/MainMenu";
import Game from "../components/Game";

const index = () => {
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);

  const gameover = (score) => {
    setPlaying(false);
    if (score > highscore) setHighscore(score);
  };

  const start = () => {
    setPlaying(true);
  };

  return (
    <Center>
      {playing ? (
        <Game onGameover={gameover} />
      ) : (
        <MainMenu onStart={start} highscore={highscore} />
      )}
    </Center>
  );
};

export default index;
