import { Box, Flex, Heading } from '@chakra-ui/react';
import config from '../../helpers/config';
import PlanCard from '../PlanCard';
import Wrapper from '../Wrapper';

const PlanSection: React.FC = () => {
  const { plans } = config;
  return (
    <Box bg="brand.900" py={6}>
      <Wrapper>
        <Flex
          direction="column"
          align="center"
          justify="center"
          color="brand.600"
        >
          <Heading textAlign="center" mb={4}>
            {plans.title}
          </Heading>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={12} py={8}>
            {plans.items.map(plan => (
              <PlanCard
                title={plan.title}
                subtitle={plan.subtitle}
                color={plan.color}
                info={plan.info}
                price={plan.price}
                url={plan.url}
                highlight={plan.highlight}
                key={plan.title}
              />
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default PlanSection;
