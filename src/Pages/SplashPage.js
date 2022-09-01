import React from "react";
import { Box, Center, Container, IconButton } from "@chakra-ui/react";
import APP_NAME from "../constants/consts";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();
  const navigateToUserDetailsPage = () => {
    navigate("/userDetails");
  };

  return (
    <div position="relative">
      <Box height={"100vh"} bg="#1A202C">
        <Center height={"100vh"}>
          <Container centerContent color={"#EDF2F7"}>
            <Heading size="2xl">{APP_NAME}</Heading>
            <Text size="xl" m={4}>
              Easiest macro calculator to keep you on track
            </Text>
            <IconButton
              icon={<ChevronRightIcon />}
              isRound
              mt={6}
              color="gray.800"
              onClick={navigateToUserDetailsPage}></IconButton>
            <Text size="xl" m={4}>
              Get Started
            </Text>
          </Container>
        </Center>
      </Box>
    </div>
  );
};

export default SplashPage;
