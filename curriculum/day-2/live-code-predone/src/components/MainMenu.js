import Stack from "./Stack";

const MainMenu = ({ highscore, onStart }) => {
  return (
    <Stack>
      <div className="text-7xl mb-2">➕</div>
      <div className="text-7xl font-bold mb-4">Addition Game</div>
      <div className="text-4xl mb-8">Highscore: {highscore}</div>
      <button
        className="w-48 bg-blue-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-blue-700"
        onClick={onStart}
      >
        New Game
      </button>
    </Stack>
  );
};

export default MainMenu;
