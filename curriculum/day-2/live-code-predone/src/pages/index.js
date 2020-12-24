import { useState } from "react";
import Center from "../components/Center";
import MainMenu from "../components/MainMenu";
import Game from "../components/Game";

// only page on the site
// handles switching between the main menu and the game
const index = () => {
  // whether the game is being played
  const [playing, setPlaying] = useState(false);

  // the highest score recived from the game
  const [highscore, setHighscore] = useState(0);

  // gets called when the game is over
  // from the Game component
  const gameover = (score) => {
    // set playingt to false
    // which will switch the rendered component back to the MainMenu
    setPlaying(false);

    // if the score recived from the game is greater than the highscore
    if (score > highscore) {
      // make it the new highscore
      setHighscore(score);
    }
  };

  // gets called when the game is started
  // which switch the rendered component to the Game
  // starting the game
  const start = () => {
    setPlaying(true);
  };

  // renders the Game if `playing` otherwise render the MainMenu
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
