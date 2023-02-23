import { Flex, Heading, Link, Text, useTheme } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';

const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Wrapper>
        <Flex py="0.5rem" direction="column" align="center" minH="100vh">
          <Flex as="main">
            <Heading as="h1">MKT Landing Page</Heading>
          </Flex>
        </Flex>
      </Wrapper>
      <Flex
        as="footer"
        w="100%"
        h="4.25rem"
        justify="center"
        align="center"
        borderTop={`1px solid ${theme.colors.brand['600']}`}
      >
        <Link
          href="https://dangarcia-devel.vercel.app/"
          isExternal
          display="flex"
        >
          Desenvolvido por
          <Text as="span" ml="0.25rem" display="block" fontWeight="bold">
            Dan Garcia ☕
          </Text>
        </Link>
      </Flex>
    </>
  );
};

export default Home;
