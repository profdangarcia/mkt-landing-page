import { Box, Button, Flex, Link } from '@chakra-ui/react';
import config from '../../helpers/config';
import IconedInfo from '../IconedInfo';
import Wrapper from '../Wrapper';

const CtaSection: React.FC = () => {
  const { cta, payments } = config;
  return (
    <Box w="100%" bg="brand.900" py={4}>
      <Wrapper>
        <Flex align="center" direction="column" gap={8}>
          <Link href={cta.checkoutUrl} isExternal w="95%">
            <Button
              color="brand.600"
              bg="brand.700"
              w="100%"
              h={24}
              fontSize={32}
              _hover={{ bg: 'brand.800' }}
            >
              {cta.ctaButton}
            </Button>
          </Link>

          <Flex gap={8} w="100%" align="center" justify="center">
            {payments.map(payment => (
              <IconedInfo
                title={payment.text}
                icon={payment.icon}
                key={payment.text}
              />
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default CtaSection;
