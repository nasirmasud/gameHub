import { Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
