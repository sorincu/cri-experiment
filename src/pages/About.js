import React from "react";
import { Link, Button } from "@chakra-ui/react";
import {
  Box,
  Flex,
  VStack,
  Center,
  Heading,
  Text,
  Button
} from "@chakra-ui/react";
import BaseContainer from "../components/Layouts/BaseContainer";
import Section from "../components/Layouts/Section";

const About = () => {
  return (
    <BaseContainer px="20px">
      <VStack spacing={8} py="2rem">
        <VStack align="start">
          <Heading as="h1" color="brand.gray_dark">
            Hi there! 👋
          </Heading>
          <Text color="gray.700">Welcome to my messy Stackblitz space!</Text>{" "}
          <Text color="black" as="cite" fontSize="1.3rem">
            — There's nothing special here, just a simple chakra-ui set up for
            testing purposes, but feel free to browse though the code in case it
            helps you out.
          </Text>
          <br />
          <Heading as="h5" fontSize="1.4rem" color="brand.gray_dark">
            Chakra UI
          </Heading>
          <Text color="brand.gray.50">
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications...{" "}
            <Link href="https://chakra-ui.com/" isExternal>
              <Button variant="link" colorScheme="blue">
                Check it Out
              </Button>
            </Link>
          </Text>
        </VStack>
      </VStack>
    </BaseContainer>
  );
};

export default About;
