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
const MacroTable = () => {
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
              <Meal mealType="Breakfast" mealMacros="abcd"></Meal>
            </TabPanel>
            <TabPanel>
              <Meal mealType="Lunch" mealMacros="abcd">
                {" "}
              </Meal>
            </TabPanel>
            <TabPanel>
              <Meal mealType="Dinner" mealMacros="abcd"></Meal>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default MacroTable;
