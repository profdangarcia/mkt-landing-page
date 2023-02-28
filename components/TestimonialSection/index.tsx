/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';

import config from '../../helpers/config';
import slickConfig from './slickConfig';
import Wrapper from '../Wrapper';

const TestimonialSection: React.FC = () => {
  const { testimonial } = config;

  return (
    <Flex w="100%" bg="brand.900">
      <Wrapper>
        <Flex direction="column" py={8}>
          <Heading color="brand.600" textAlign="center" mb={8}>
            {testimonial.title}
          </Heading>
          <Flex w="100%" direction="column" maxW="90vw" px={12}>
            <Slider {...slickConfig}>
              {testimonial.items.map(item => (
                <Box key={item.title}>
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    w="100%"
                    justify="center"
                    align="center"
                    gap={4}
                  >
                    <Box position="relative">
                      <Image
                        width={520}
                        height={520}
                        alt={item.title}
                        src={item.image}
                      />
                    </Box>
                    {item.text && (
                      <Text w={{ base: '100%', md: '50%' }}>{item.text}</Text>
                    )}
                  </Flex>
                </Box>
              ))}
            </Slider>
          </Flex>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default TestimonialSection;
