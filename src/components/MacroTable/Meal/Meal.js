import React from "react";

const Meal = (props) => {
  return (
    <div>
      {props.mealType}
      {props.mealMacros}
    </div>
  );
};

export default Meal;
