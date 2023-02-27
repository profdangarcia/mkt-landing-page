import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import config from '../../helpers/config';
import Wrapper from '../Wrapper';

const SatisfactionSection: React.FC = () => {
  const { guarantee } = config;
  return (
    <Flex w="100%" bg="brand.600" color="brand.900">
      <Wrapper>
        <Flex
          py={8}
          justify="center"
          w="100%"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Image
            src={guarantee.image}
            width={320}
            height={320}
            alt="Satisfação Garantida"
          />
          <Flex direction="column" gap={4}>
            <Heading color="brand.800" fontSize="3.5rem" textAlign="center">
              {guarantee.title}
            </Heading>
            <Flex w="100%" align="center" justify="center">
              <Text textAlign="center" fontSize="1.5rem">
                {guarantee.message}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default SatisfactionSection;
