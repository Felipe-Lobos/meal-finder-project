import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import { useState } from "react";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;

const makeMealUrl = (category: Category) =>
  `${baseUrl}filter.php?c=${category.strCategory}`;
const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);
  const { loading, data } = useHttpData<Category>(url);
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    const urlmeal = `${baseUrl}search.php?s=${searchForm.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(urlmeal)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  };
  const filterByCategory = (category:Category) => {
    const urlmeal = `${baseUrl}filter.php?c=${category.strCategory}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(urlmeal)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  }

  const {
    fetch,
    loading: loadingMealDetails,
    data: mealDetailData,
  } = useFetch<MealDetails>();

  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
  };
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"70px 1fr"}
        gridTemplateColumns={{ sm: "0 1fr", md: "250px 1fr" }}
        fontSize={14}
      >
        <GridItem
          pos="sticky"
          top="0"
          zIndex={1}
          pl="2"
          pt={3}
          bg="white"
          boxShadow="lg"
          area={"header"}
        >
          <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem
          pos="sticky"
          top="60px"
          left="0"
          p={5}
          area={"nav"}
          height="calc(100vh - 60px)"
          overflow="auto"
        >
          <SideNav
            filterCategory={filterByCategory}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={data}
            loading={loading}
          ></SideNav>
        </GridItem>
        <GridItem p="6" bg="gray.100" area={"main"}>
          <MainContent
            openRecipe={searchMealDetails}
            loading={loadingMeal}
            meals={dataMeal}
          ></MainContent>
        </GridItem>
      </Grid>
      <RecipeModal
        data={mealDetailData}
        loading={loadingMealDetails}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;
