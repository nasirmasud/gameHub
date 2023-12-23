import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 85 ? 'lime' : score > 70 ? 'orange' : score < 60 ? 'yellow' : '';

  return (
    <Badge
      color={color}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      variant="subtle"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
