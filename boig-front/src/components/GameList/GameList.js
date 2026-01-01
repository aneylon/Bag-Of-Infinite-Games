import { useEffect, useState } from "react";
import GameListItem from "./GameListItem";
import Pulse from "../Loading/Pulse";

const GameList = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    console.log("get list of games");
    setGames([
      { id: 1, title: "name one", url: "http://something.com" },
      { id: 2, title: "name two", url: "http://somethingElse.com" },
      { id: 3, title: "name three", url: "http://somethingOrOther.com" },
    ]);
  }, []);
  return (
    <div>
      <h1>Game List</h1>
      {!games && <Pulse />}
      {games && (
        <ul>
          {games.map((game) => (
            <GameListItem game={game} key={game.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GameList;
