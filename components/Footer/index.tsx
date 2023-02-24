import { Flex, Link, Text, Box, keyframes } from '@chakra-ui/react';
import config from '../../helpers/config';

const animateWave = keyframes`
  0% {
    background-position-x: 62.5rem;
  }
  100% {
    background-position-x: 0;
  }
`;

const opositeAnimateWave = keyframes`
  0% {
    background-position-x: -62.5rem;
  }
  100% {
    background-position-x: 0;
  }
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { socials } = config;
  return (
    <Flex
      as="footer"
      position="relative"
      w="100%"
      bg="brand.800"
      minH="6.25rem"
      justify="center"
      align="center"
      direction="column"
      mt="6.35rem"
      px={2}
    >
      <Box>
        <Box
          position="absolute"
          top="-6.25rem"
          left="0"
          w="100%"
          h="6.25rem"
          bg="url(/wave.png)"
          backgroundSize="62.5rem 6.25rem"
          zIndex={1000}
          opacity="1"
          bottom="0"
          animation={`${animateWave} 4s linear infinite`}
        />
        <Box
          position="absolute"
          top="-6.25rem"
          left="0"
          w="100%"
          h="6.25rem"
          bg="url(/wave.png)"
          backgroundSize="62.5rem 6.25rem"
          zIndex={999}
          opacity="0.5"
          bottom="0.625rem"
          animation={`${opositeAnimateWave} 4s linear infinite`}
        />
        <Box
          position="absolute"
          top="-6.25rem"
          left="0"
          w="100%"
          h="6.25rem"
          bg="url(/wave.png)"
          backgroundSize="62.5rem 6.25rem"
          zIndex={1000}
          opacity="0.2"
          bottom="0.9375rem"
          animation={`${animateWave} 3s linear infinite`}
        />
        <Box
          position="absolute"
          top="-6.25rem"
          left="0"
          w="100%"
          h="6.25rem"
          bg="url(/wave.png)"
          backgroundSize="62.5rem 6.25rem"
          zIndex={999}
          opacity="0.7"
          bottom="1.25rem"
          animation={`${opositeAnimateWave} 3s linear infinite`}
        />
      </Box>
      <Flex as="ul" justify="center" align="center" my={2} wrap="wrap" gap={8}>
        {socials.map(social => (
          <Flex
            key={social.name}
            as="li"
            listStyleType="none"
            fontSize="2rem"
            color="brand.600"
            transition="0.5s"
            _hover={{ transform: 'translateY(-0.6rem)' }}
          >
            <Link href={social.url} isExternal>
              {social.icon}
            </Link>
          </Flex>
        ))}
      </Flex>
      <Text color="brand.600" textAlign="center" mt={2} display="block">
        &copy;{`${year} ${config.brand}`} | Todos os direitos Reservados
      </Text>
    </Flex>
  );
};

export default Footer;
