import { SimpleGrid } from "@chakra-ui/react";
import { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  loading: boolean;
  meals: Meal[];
  openRecipe: (meal: Meal) => void;
};
/* // Passing `columns={[2, null, 3]}` and `columns={{ sm: 2, md: 3 }}` //
      //will have the same effect. */
function MainContent({ meals, loading, openRecipe }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="20px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} num={skeleton} />)}
      {meals.map((meal) => (
        <MealCard key={meal.idMeal}  openRecipe={() => openRecipe(meal)} meal={meal} />
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
