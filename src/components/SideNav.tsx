import { Category } from "../types";
import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  filterCategory: (category: Category) => void;
};
const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};
function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
  filterCategory,
}: Props) {

  const onClick= (category: Category) =>{
    setSelectedCategory(category);
    filterCategory(category)
  }
  return loading ? (
    <SkeletonText mt="4" noOfLines={15} spacing="6" skeletonHeight="3" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>

      <VStack align="stretch">
        {categories.map((e) => (
          <Link
            onClick={() => onClick(e) }
            px={2}
            py={1}
            borderRadius={5}
            _hover={{ textDecor: "none" }}
            key={e.strCategory}
            // && evalua la expresion de comparacion de los strCategory, de ser true, devuelve lo segundo
            // al envolver todo en ...(), se desestrctura el resultado .
            {...(selectedCategory.strCategory == e.strCategory &&
              selectedProps)}
          >
            {e.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
