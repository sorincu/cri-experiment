import React, { useRef, useCallback } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react";
import Logo from "../Logo";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Button
        variant="link"
        color={["white", "white", "white", "primary.500"]}
        _hover={{
          color: {
            base: "blue.600",
            sm: "blue.100",
            md: "blue.600",
            lg: "blue.600"
          },
          textDecoration: "none"
        }}
        _active={{
          color: {
            base: "blue.800",
            sm: "blue.100",
            md: "blue.800",
            lg: "blue.800"
          }
        }}
        display="inline-flex"
        mr="20px"
        mb={{ base: 0, sm: "1rem", md: 0, lg: 0 }}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};

// header menu icon
const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

// header menu close icon
const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

//
// Responsive header component
//
const Header = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const headerRef = useRef(null);

  useOnClickOutside(headerRef, () => {
    setShow(false);
  });

  const menuItemCloseNav = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Flex
      as="header"
      position="sticky"
      //direction="column"
      top="0"
      w="100vw"
      p={0}
      color={["white", "white", "white", "primary.700"]}
      bg={["primary.500", "primary.500", "primary.500", "white"]}
      boxShadow={useColorModeValue(
        "0px 0.25rem 0.75rem 0px rgb(190 194 255 / 18%)",
        "0px 0.25rem 0.75rem 0px rgb(0 14 81 / 35%)"
      )}
      zIndex={999}
      ref={headerRef}
      {...props}
    >
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        w="100%"
        maxW="1366px"
        m="auto"
        px="20px"
        py={6}
      >
        <Flex align="center">
          <Logo onClick={menuItemCloseNav} />
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          {show ? (
            <IconButton variant="ghost">
              <CloseIcon />
            </IconButton>
          ) : (
            <MenuIcon />
          )}
        </Box>

        <Box
          display={{ base: show ? "flex" : "none", md: "flex" }}
          justifyContent="center"
          align="center"
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Flex
            justify="center"
            align="center"
            direction={["column", "column", "column", "row"]}
          >
            <MenuItem to="/" onClick={menuItemCloseNav}>
              Home{" "}
            </MenuItem>
            <MenuItem to="/About" onClick={menuItemCloseNav}>
              About{" "}
            </MenuItem>
            <MenuItem to="/faetures" onClick={menuItemCloseNav}>
              Features{" "}
            </MenuItem>
            <MenuItem to="/pricing" onClick={menuItemCloseNav}>
              Pricing{" "}
            </MenuItem>
            <Link to="/users">
              <Button
                onClick={menuItemCloseNav}
                size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "primary.500", "white"]}
                bg={["white", "white", "white", "primary.500"]}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.100",
                    "primary.600"
                  ]
                }}
                _active={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.100",
                    "primary.600"
                  ]
                }}
                _focus={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600"
                  ]
                }}
              >
                Create Account
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
