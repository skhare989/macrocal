import React from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <div>
      <Container maxW="100%" px="32px" py="16px" bg="gray.900" color="gray.100">
        <Flex>
          <Box>
            <Heading size="lg">MACROCAL</Heading>
          </Box>
          <Spacer />
          <Box>
            <HStack>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                m="8px"
              />
              <VStack>
                <ChevronDownIcon />
              </VStack>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
