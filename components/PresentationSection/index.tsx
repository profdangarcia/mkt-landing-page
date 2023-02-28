import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import config from '../../helpers/config';
import Wrapper from '../Wrapper';

const PresentationSection: React.FC = () => {
  const { presentation } = config;
  return (
    <Box w="100%" bg="brand.600" py={8}>
      <Wrapper>
        <Flex direction="column" w="100%" gap={12} justify="center">
          <Heading textAlign="center" color="brand.800">
            {presentation.title}
          </Heading>
          <Flex direction="column" gap={8} w="100%">
            {presentation.items.map((result, index) => {
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
                  <Box
                    order={isEven ? 1 : 2}
                    w={{ base: '100%', md: '50%' }}
                    textAlign={{
                      base: 'center',
                      md: isEven ? 'left' : 'right',
                    }}
                  >
                    <Heading color="brand.900" fontSize="1.5rem" mb={4}>
                      {result.title}
                    </Heading>
                    <Text color="brand.900" fontSize="1.25rem">
                      {result.info}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default PresentationSection;
