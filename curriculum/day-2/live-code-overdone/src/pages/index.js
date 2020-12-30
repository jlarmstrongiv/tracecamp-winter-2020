import { useState, useEffect } from "react";

import Game from "../components/Game";
import MainMenu from "../components/MainMenu";
import Center from "../components/Center";
import Stack from "../components/Stack";

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);

  const start = () => {
    setPlaying(true);
  };

  const gameover = (score) => {
    if (score > highscore) {
      setHighscore(score);
    }
    setPlaying(false);
  };

  useEffect(() => {
    const item = window.localStorage.getItem("highscore");
    if (item) setHighscore(parseInt(item));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("highscore", highscore);
  }, [highscore]);

  return (
    <Center>
      <Stack>
        {playing ? (
          <Game onGameover={gameover} />
        ) : (
          <MainMenu onStart={start} highscore={highscore} />
        )}
      </Stack>
    </Center>
  );
};

export default Home;
