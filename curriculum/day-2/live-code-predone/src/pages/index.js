import react, { useState } from "react";
import Game from "../components/Game";
import MainMenu from "../components/MainMenu";

const index = () => {
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);

  const start_game = () => {
    setPlaying(true);
  };

  const game_over = (score) => {
    setPlaying(false);
    if (score > highscore) setHighscore(score);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {playing ? (
        <Game onGameover={game_over} />
      ) : (
        <MainMenu highscore={highscore} onStart={start_game} />
      )}
    </div>
  );
};

export default index;
