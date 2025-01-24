import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";
type Props = {};

function RecipeModalSkeleton({}: Props) {
  return (
    <Container>
    <SkeletonText skeletonHeight={8} noOfLines={1} spacing={4} mb={4} />
      <Skeleton height={250} />
      <SkeletonText  noOfLines={10} spacing={4} mt={6} />
    </Container>
  );
}

export default RecipeModalSkeleton;
