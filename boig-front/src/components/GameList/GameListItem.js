const GameListItem = ({ game }) => {
  return (
    <li>
      {/* TODO : add image */}
      <a href={game.url}>{game.title} </a>
    </li>
  );
};

export default GameListItem;
