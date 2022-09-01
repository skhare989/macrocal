import {
  Box,
  Container,
  Flex,
  Input,
  Select,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  addTotalDailyCalories,
  setMacroRatioSelected,
  updateIndividualMacros,
} from "../reducers/userInfoUpdate";
import { useNavigate } from "react-router-dom";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const navigateToMainDashboard = () => {
    navigate("/mainDashboard");
  };

  const macros = useSelector((state) => state.userInfoUpdate);

  const dispatch = useDispatch();

  const macroOptions = [
    {
      macroDisplay: "P:40%, C:30%, F:30%",
      macroValue: "4:3:3",
    },
    {
      macroDisplay: "P:50%, C:20%, F:30%",
      macroValue: "5:2:3",
    },
    {
      macroDisplay: "P:50%, C:10%, F:40%",
      macroValue: "5:1:4",
    },
  ];

  const macroOptionsDisplay = macroOptions.map((macro) => {
    return (
      <option
        style={{ color: "black" }}
        value={macro.macroValue}
        key={macro.macroValue}>
        {macro.macroDisplay}
      </option>
    );
  });

  return (
    <div>
      <Header />
      <Box p="160px" bg="#1A202C" color="gray.100" h="85vh">
        <Container maxW="700px" centerContent>
          <Text fontSize="2xl" fontWeight="semibold" pb="16px">
            Enter your total calorie intake
          </Text>
          <Flex>
            <Input
              width="100px"
              variant="flushed"
              placeholder="calories"
              fontSize="2xl"
              textAlign="center"
              onChange={(e) => {
                dispatch(addTotalDailyCalories(e.target.value));
                dispatch(updateIndividualMacros());
              }}></Input>
            <Text fontSize="2xl"> kCal/day</Text>
          </Flex>
          <Text fontSize="2xl" fontWeight="semibold" pt="48px">
            Select your preffered macro ratio
          </Text>
          <Select
            variant="outline"
            width="300px"
            borderColor="gray.700"
            my="16px"
            onChange={(e) => {
              dispatch(
                setMacroRatioSelected(macroOptions[e.target.selectedIndex])
              );
              dispatch(updateIndividualMacros());
            }}>
            {macroOptionsDisplay}
          </Select>

          <Text fontSize="xl" fontWeight="semibold" pt="48px">
            You Need to eat
          </Text>
          <Text>Protein: {macros.protein.totalProtein} gms</Text>
          <Text>
            Carbohydrates: {macros.carbohydrates.totalCarbohydrates} gms
          </Text>
          <Text>Fats: {macros.fats.totalFats} gms</Text>

          <Button
            onClick={navigateToMainDashboard}
            p="16px"
            m="32px"
            colorScheme="teal">
            {" "}
            Proceed to Dashboard
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default UserDetailsPage;
