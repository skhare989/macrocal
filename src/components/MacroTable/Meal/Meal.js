import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const Meal = (props) => {
  const mealDetails = props.mealItems;

  return (
    <div>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Food Label</Th>
              <Th>Food Calories</Th>
              <Th>Protein</Th>
              <Th>Fats</Th>
              <Th>Carbs</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mealDetails.map((e) => {
              return (
                <Tr key={e.foodId}>
                  <Td>{e.label}</Td>
                  <Td>{e.totalCals}</Td>
                  <Td>{e.protein}</Td>
                  <Td>{e.carbs}</Td>
                  <Td>{e.fats}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Meal;
