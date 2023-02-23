import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box maxW="1080px" mx="auto" px="1rem">
      {children}
    </Box>
  );
};

export default Wrapper;
