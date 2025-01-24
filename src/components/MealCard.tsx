import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Meal } from "../types";

type Props = {
  meal: Meal;
  openRecipe: () => void;
};

function MealCard({ meal,openRecipe }: Props) {
  return (
    <Card key={meal.idMeal} boxShadow="lg">
      <CardBody>
        <Image loading="lazy" src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Heading color="blue.400" size="md">
          <Text mt="4"> {meal.strMeal} </Text>
        </Heading>
      </CardBody>
      <CardFooter pt="0">
        <Button onClick={openRecipe} variant="solid" color="white" bgColor="blue.400">
          Receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
