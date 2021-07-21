import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-bb182-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("there's an error");
      }
      const data = await response.json();
      let mealsArray = [];
      for (let key in data) {
        mealsArray.push({ id: key, ...data[key] });
      }
      setMeals(mealsArray);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      console.log("ERROR:", error);
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isError) {
    return (
      <section className={classes.MealsError}>
        <p>{isError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>LOADING....</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
