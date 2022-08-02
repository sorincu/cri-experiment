import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Stack,
  Button,
  Heading,
  Text,
  Code,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Section from './components/Sections/Section';
import {
  ButtonPrimary,
  ButtonSoftPrimary,
  ButtonPrimaryOutline,
  ButtonSoftSuccess,
} from './components/Buttons';
import { ArrowUp, ArrowCircleLeft } from 'phosphor-react';

const HomePage = () => {
  return (
    <>
      <Section bg="gray.100" py={{ base: '6rem', md: '7rem', lg: '8rem' }}>
        <Flex
          w="100%"
          direction="column"
          justify="center"
          align="center"
          mx="20px"
          m="0 auto"
        >
          <Heading as="h3" align="center">
            my name is boomboxblaster
          </Heading>
          <Box
            border="1px"
            borderRadius="md"
            borderColor="primary.200"
            bg="blue.200"
          >
            Card
          </Box>
          <Text fontSize="md">A custom Section component</Text>
        </Flex>
      </Section>
      <Section bg="#fff" py={{ base: '6rem', md: '7rem', lg: '8rem' }}>
        <Flex
          w="100%"
          direction="column"
          justify="center"
          align="center"
          mx="20px"
          m="0 auto"
        >
          <Heading as="h3" align="center" mb="1rem">
            Custom Buttons
          </Heading>
          <Text fontSize="md">
            Each one of these buttons is an ordinary React component, which in
            turn wraps a default chakra-ui button. However, chakra-ui{' '}
            <ChakraLink
              heref="https://chakra-ui.com/guides/as-prop#option-1-using-forwardref-from-chakra-uireact"
              isExternal
            >
              <Button variant="link">
                <Code>forwardRef</Code>
              </Button>
            </ChakraLink>{' '}
            is used to pass along any other{' '}
            <Code colorScheme="yellow">ButtonProps</Code> to the component
            itself. I'm not using TypeScript here, but it's certainly easy to
            get along it.
          </Text>
          <br />
          <Text fontSize="md">
            I've chosen that approach in order to provide a better brand
            consistency for the buttons, "enforcing" a pre-defined style scheme.
            Altought there are other ways to achieve more advanced component
            styling with chakra-ui, such as described on Chakra UI docs on{' '}
            <ChakraLink
              href="https://chakra-ui.com/docs/features/text-and-layer-styles"
              isExternal
            >
              <Button variant="link" colorScheme="blue">
                Text and Layer Styles
              </Button>
            </ChakraLink>
            {' and '}
            <ChakraLink
              href="https://chakra-ui.com/docs/theming/component-style#base-styles-and-modifier-styles"
              isExternal
            >
              <Button variant="link" colorScheme="blue">
                Base Style and Modifier Styles
              </Button>
            </ChakraLink>
            {' , '}
            that seemed to me an easier alternative.
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my="1rem"
          >
            <Stack
              direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
              spacing={4}
            >
              <ButtonPrimary>primary</ButtonPrimary>
              <ButtonSoftPrimary>soft primary</ButtonSoftPrimary>
              <ButtonPrimaryOutline
                leftIcon={<ArrowUp weight="fill" size={18} />}
              >
                primary outline
              </ButtonPrimaryOutline>
              <ButtonSoftSuccess>soft success</ButtonSoftSuccess>
            </Stack>
          </Box>
        </Flex>
        <Box display="flex" justifyContent="flex-start" mt="2rem">
          <Text
            fontSize="md"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            Have a look at{' '}
            <Code children="components/Buttons/" display="block" ml=".45rem" />
          </Text>
        </Box>
      </Section>
    </>
  );
};

export default HomePage;
