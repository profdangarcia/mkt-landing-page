import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import config from '../../helpers/config';
import Wrapper from '../Wrapper';

const ResultsSection: React.FC = () => {
  const { results } = config;
  return (
    <Box w="100%" bg="brand.600" py={8}>
      <Wrapper>
        <Flex direction="column" w="100%" gap={12} justify="center">
          <Heading textAlign="center" color="brand.800">
            {results.title}
          </Heading>
          <Flex direction="column" gap={8} w="100%">
            {results.items.map((result, index) => {
              const isEven = index % 2 === 0;
              return (
                <Flex
                  key={result.info}
                  w="100%"
                  align="center"
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between"
                  gap={8}
                >
                  <Box
                    order={{ base: 1, md: isEven ? 2 : 1 }}
                    w="auto"
                    h="auto"
                  >
                    <Image
                      src={result.image}
                      alt={result.info}
                      width={360}
                      height={360}
                    />
                  </Box>
                  <Text
                    color="brand.900"
                    fontSize="1.25rem"
                    order={isEven ? 1 : 2}
                    w={{ base: '100%', md: '50%' }}
                    textAlign={{
                      base: 'center',
                      md: isEven ? 'left' : 'right',
                    }}
                  >
                    {result.info}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default ResultsSection;
