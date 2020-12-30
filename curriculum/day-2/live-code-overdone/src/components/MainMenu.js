const MainMenu = (props) => {
  const highscore_check = (props.highscore * 7 + 10) % 100;

  return (
    <>
      <div className="text-7xl mb-2">🧮</div>
      <div className="text-7xl font-bold mb-1">Math Game</div>
      <div className="text-3xl tracking-wider">Made by Josh</div>
      <div className="h-0.5 bg-gray-200 my-4 w-72"></div>
      <div className="text-3xl mb-4">Highscore: {props.highscore}</div>
      <button
        className="w-48 bg-yellow-600 text-white font-bold rounded-lg text-xl p-4 hover:bg-yellow-700"
        onClick={props.onStart}
      >
        New Game
      </button>
      <div className="text-gray-100 text-sm">{highscore_check}</div>
    </>
  );
};

export default MainMenu;
