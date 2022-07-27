import React from "react";
import { Button, forwardRef, useColorModeValue } from "@chakra-ui/react";

// Check forwardRef docs: https://chakra-ui.com/guides/as-prop

//
// Custom Icon Component which forwards IconProps ThemeLogo themeToggleLogo
//
export const ButtonBrandMode = forwardRef((props, ref) => (
  <Button ref={ref} {...props} />
));

//
// Button Primary
//
export const ButtonPrimary = forwardRef((props, ref) => (
  <Button
    color="white"
    bg="blue.500"
    borderWidth="2px"
    borderColor="blue.500"
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "blue.500",
      borderColor: "blue.500",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    _active={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600"
    }}
    _focus={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      outline: "0",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));

//
// Button Soft Primary
//
export const ButtonSoftPrimary = forwardRef((props, ref) => (
  <Button
    color="blue.500"
    bg="blue.50"
    borderWidth="2px"
    borderColor="blue.50"
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "blue.500",
      borderColor: "blue.500",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      ),
      leftIconColor: "white"
    }}
    _active={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      leftIconColor: "white"
    }}
    _focus={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      outline: "0",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));

//
// Button Soft Success
//
export const ButtonSoftSuccess = forwardRef((props, ref) => (
  <Button
    color="#36b37e"
    bg="#d7f0e5"
    borderWidth="2px"
    borderColor="#d7f0e5"
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "#36b37e",
      borderColor: "#36b37e",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)",
        "0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)"
      )
    }}
    _active={{
      color: "white",
      bg: "#36b37e",
      borderColor: "#36b37e"
    }}
    _focus={{
      color: "white",
      bg: "#2c8f5d",
      borderColor: "#36b37e",
      outline: "0",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)",
        "0px 0.25rem 0.75rem 0px rgb(54 179 126 / 26%)"
      )
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));

//
// Button Primary White
//
export const ButtonPrimaryWhite = forwardRef((props, ref) => (
  <Button
    color="blue.500"
    bg="white"
    borderWidth="2px"
    borderColor="white"
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "blue.500",
      borderColor: "blue.500",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    _active={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600"
    }}
    _focus={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      outline: "0",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));

//
// Button Primary Outline
//
export const ButtonPrimaryOutline = forwardRef((props, ref) => (
  <Button
    color={useColorModeValue("blue.500", "blue.100")}
    bg="trasparent"
    borderWidth="2px"
    borderColor={useColorModeValue("blue.500", "blue.100")}
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "blue.500",
      borderColor: "blue.500",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    _active={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600"
    }}
    _focus={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      outline: "0",
      boxShadow: useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)",
        "0px 0.25rem 0.75rem 0px rgb(0 46 230 / 35%)"
      )
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));

//
// Button Outline White
//
export const ButtonOutlineWhite = forwardRef((props, ref) => (
  <Button
    color="blue"
    bg="trasparent"
    borderWidth="2px"
    borderColor="blue"
    borderRadius="4px"
    _hover={{
      color: "white",
      bg: "blue",
      boxShadow: "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)"
    }}
    _active={{ color: "white", bg: "blue.600", borderColor: "blue.600" }}
    _focus={{
      color: "white",
      bg: "blue.600",
      borderColor: "blue.600",
      outline: "0",
      boxShadow: "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 88%)"
    }}
    ref={ref}
    {...props}
  >
    {props.children}
  </Button>
));
