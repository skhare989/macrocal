import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";

import "./MacroTable.css";
import Meal from "./Meal/Meal.js";
import { useSelector } from "react-redux";
const MacroTable = () => {
  const meals = useSelector((state) => {
    return state.userInfoUpdate?.meals;
  });

  return (
    <div className="macro-table-container">
      <Heading size="sm">Your Calorie Intake:</Heading>
      <div className="macro-tab-container">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Breakfast</Tab>
            <Tab>Lunch</Tab>
            <Tab>Dinner</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Meal mealItems={meals.breakfast}></Meal>
            </TabPanel>
            <TabPanel>
              <Meal mealItems={meals.lunch}> </Meal>
            </TabPanel>
            <TabPanel>
              <Meal mealItems={meals.dinner}></Meal>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default MacroTable;
