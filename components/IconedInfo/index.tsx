import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  info?: string;
};

const IconedInfo: React.FC<Props> = ({ icon, title, info }) => {
  return (
    <Flex
      align="center"
      color="brand.600"
      gap={2}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box fontSize="2rem">{icon}</Box>
      <Flex
        direction="column"
        gap={1}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text fontWeight="bold" fontSize="1.125rem">
          {title}
        </Text>
        {!!info && <Text fontStyle="italic">{info}</Text>}
      </Flex>
    </Flex>
  );
};

export default IconedInfo;
