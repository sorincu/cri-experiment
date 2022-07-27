import React from "react";
import { Center } from "@chakra-ui/react";
import Container from "../Layouts/Container";

const Section = props => {
  const { full, children, ...rest } = props;
  return (
    <Center as="section" w="100%" position="relative" {...rest}>
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;
