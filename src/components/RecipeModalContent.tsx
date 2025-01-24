import {  MealDetails } from "../types";
import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Image,
  Heading,
  Text,
  OrderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

type Props = {
  data: MealDetails;
};

const joinIngridients = (data: MealDetails) => {
  let ingridients = [];
  for (let index = 1; index <= 20; index++) {
    const ingridient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingridient !== ""){
        ingridients.push(`${ingridient} - ${measure}`)
    }
  }
  return ingridients;
};

function RecipeModalContent({ data }: Props) {
    const ingridients = joinIngridients(data);
    //console.log("🚀 ~ RecipeModalContent ~ ingridients:", ingridients)
    
    return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
          alt={data.strMeal}
        />
        <Heading my={4} size="md">
          Ingredientes
        </Heading>
        <OrderedList my={2}>
            {ingridients.map(ingridient => (
                <ListItem key={ingridient}>{ingridient}</ListItem>
            ))}
        </OrderedList>
        <Divider my={2} />
        <Text whiteSpace="pre-line">{data.strInstructions}</Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
