import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameGenreSkeleton = () => {
  return (
    <Card>
      <Skeleton height="180px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameGenreSkeleton;
