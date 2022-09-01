import { Flex, Progress, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CalorieProgress = () => {
  const state = useSelector((state) => {
    return state.userInfoUpdate;
  });

  const remainingCalories =
    state.totalDailyCalories - state.totalCaloriesConsumed;

  return (
    <div>
      <Flex>
        <Text fontSize="l">Total Calories:</Text>
        <Text fontSize="l">
          {state.totalCaloriesConsumed}/{state.totalDailyCalories}
        </Text>
        <Spacer></Spacer>
        <Text fontSize="l">Remaning Calories:</Text>
        <Text fontSize="l">{remainingCalories}</Text>
      </Flex>
      <Progress
        colorScheme="green"
        size="sm"
        value={state.totalCaloriesConsumed}
        max={state.totalDailyCalories}></Progress>
    </div>
  );
};

export default CalorieProgress;
