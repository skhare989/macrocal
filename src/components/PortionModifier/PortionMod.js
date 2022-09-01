import { Select } from "@chakra-ui/react";
import React from "react";
import "./PortionMod.css";

const PortionMod = () => {
  return (
    <div className="portion-modifier-container">
      <div className="food-image">image</div>
      <div className="food-details-container">
        <div className="food-details-section-1">
          <div>
            Enter Servings: <input type="text"></input>
          </div>
          <div className="macro-details">
            <p>Protein: X </p>
            <p>Carbs: X </p>
            <p>Fats: X </p>
          </div>
        </div>
        <div className="food-details-section-2">
          <div>
            <label htmlFor="meal-select"> Select Meal </label>
            <Select id="meal-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortionMod;
