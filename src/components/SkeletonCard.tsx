import {
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

type Props = {
  num: number;
};

function SkeletonCard({ num }: Props) {
  return (
    <Card key={num} boxShadow="lg">
      <CardBody>
        <Skeleton height="230px" borderRadius={5} />
        <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="3" />
      </CardBody>
      <CardFooter pt="0">
        <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2" />
        <Skeleton height={10} width={20} borderRadius={5} />
      </CardFooter>
    </Card>
  );
}

export default SkeletonCard;
