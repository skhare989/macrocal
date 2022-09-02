import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToMeal } from "../../reducers/userInfoUpdate";
import "./PortionMod.css";

const PortionMod = () => {
  const state = useSelector((state) => {
    return state.userInfoUpdate;
  });

  const dispatch = useDispatch();

  const foodItem = state.searchFoodItemDetails?.parsed[0].food;

  const [protein, setProtein] = useState(foodItem?.nutrients?.PROCNT);
  const [fats, setFats] = useState(foodItem?.nutrients?.FAT);
  const [carbs, setCarbs] = useState(foodItem?.nutrients?.CHOCDF);
  const [totalCals, setTotalCals] = useState(foodItem?.nutrients?.ENERC_KCAL);
  const [mealType, setMealType] = useState("");
  const [numberOfServings, setNumberOfServings] = useState(0);

  const meals = [
    {
      label: "Breakfast",
      value: "breakfast",
    },
    {
      label: "Lunch",
      value: "lunch",
    },
    {
      label: "Dinner",
      value: "dinner",
    },
  ];

  const handleServingChange = (e) => {
    const noOfServings = Number(e.target.value);
    if (typeof noOfServings == "number") {
      setProtein(protein * noOfServings);
      setFats(fats * noOfServings);
      setCarbs(carbs * noOfServings);
      setTotalCals(totalCals * noOfServings);
      setNumberOfServings(noOfServings);
    }
  };

  const handleMealOptionChange = (e) => {
    setMealType(e.target.value);
  };

  const handleAdd = () => {
    const meal = {
      foodId: foodItem.foodId,
      type: mealType,
      label: foodItem.label,
      protein: protein,
      fats: fats,
      carbs: carbs,
      totalCals: totalCals,
      foodImage: foodItem.image,
      numberOfServings: numberOfServings,
    };

    dispatch(addItemToMeal(meal));
  };

  return (
    <div className="portion-modifier-container">
      <div className="food-image">
        <img src={foodItem.image} alt={foodItem.label}></img>
      </div>
      <div className="food-details-container">
        <div className="food-details-section-1">
          <div>
            <Input
              type="text"
              placeholder="Enter Servings"
              onKeyUp={(e) => {
                handleServingChange(e);
              }}></Input>
          </div>
          <div className="macro-details">
            <p>Protein: {protein} </p>
            <p>Carbs:{carbs} </p>
            <p>Fats: {fats} </p>
            <p>Calories: {totalCals}</p>
          </div>
        </div>
        <div className="food-details-section-2">
          <div>
            <Select
              placeholder="Select Meal"
              onChange={(e) => {
                handleMealOptionChange(e);
              }}>
              {meals.map((e) => {
                return (
                  <option value={e.value} key={e.value}>
                    {e.label}
                  </option>
                );
              })}
            </Select>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          handleAdd();
        }}>
        Add
      </Button>
      <Button>Cancel</Button>
    </div>
  );
};

export default PortionMod;
