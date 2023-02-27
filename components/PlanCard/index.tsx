import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useTheme,
} from '@chakra-ui/react';

type Props = {
  color: string;
  title: string;
  subtitle: string;
  price: string;
  info?: string;
  url: string;
  highlight?: boolean;
};

const PlanCard: React.FC<Props> = ({
  color,
  title,
  subtitle,
  price,
  info,
  url,
  highlight = false,
}) => {
  const theme = useTheme();

  return (
    <Flex
      bg="brand.600"
      color="brand.900"
      py={4}
      px={2}
      direction="column"
      minW="16.8rem"
      boxShadow="0 0.3125rem 0.625rem rgba(0,0,0,0.1)"
      transform={highlight ? 'scale(1.1)' : 'scale(1)'}
      zIndex={highlight ? 3 : 2}
      justify="space-between"
      align="center"
      position="relative"
    >
      {highlight && (
        <Box
          position="absolute"
          top="-0.625rem"
          left="-0.625rem"
          overflow="hidden"
          w="9.375rem"
          h="9.375rem"
          color="brand.600"
          _before={{
            position: 'absolute',
            content: '""',
            'z-index': '-1',
            display: 'block',
            border: `0.4375rem solid ${theme.colors.plans[color]}`,
            'border-top-color': 'transparent',
            'border-left-color': 'transparent',
            top: '-0.25rem',
            right: '0.9rem',
          }}
          _after={{
            position: 'absolute',
            content: '""',
            'z-index': '-1',
            display: 'block',
            border: `0.4375rem solid ${theme.colors.plans[color]}`,
            'border-top-color': 'transparent',
            'border-left-color': 'transparent',
            left: '-0.25rem',
            bottom: '0.80rem',
          }}
        >
          <Text
            position="absolute"
            as="span"
            top="2rem"
            right="0"
            transform="rotate(-45deg)"
            w="12.5rem"
            bg={theme.colors.plans[color]}
            py="0.625rem"
            textAlign="center"
            fontSize="1.1rem"
            boxShadow="0 0.3125rem 0.625rem rgba(0,0,0,0.12)"
          >
            MAIS VENDIDO
          </Text>
        </Box>
      )}
      <Flex mb={4} direction="column" w="100%" align="center">
        <Heading
          as="h3"
          textAlign="center"
          fontSize="1.5rem"
          color={theme.colors.plans[color]}
          maxW="50%"
        >
          {title}
        </Heading>
        <Heading
          as="h4"
          textAlign="center"
          fontSize="1rem"
          fontStyle="italic"
          fontWeight={400}
        >
          {subtitle}
        </Heading>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        color={theme.colors.plans[color]}
      >
        <Flex justify="center" w="100%">
          <Text as="span">R$</Text>
          <Text fontSize="2rem">{price}</Text>
          <Text as="span" alignSelf="flex-end">
            /mês
          </Text>
        </Flex>
        {!!info && (
          <Text color="gray" fontSize="0.8rem">
            {info}
          </Text>
        )}
      </Flex>

      <Link
        minW="80%"
        isExternal
        href={url}
        justifySelf="flex-end"
        _hover={{ textDecoration: 'none' }}
      >
        <Button
          bg={theme.colors.plans[color]}
          mt={4}
          w="100%"
          borderRadius="1.6rem"
          color="brand.600"
          transition="0.3s ease"
          _hover={{
            bg: theme.colors.plans[color],
            filter: 'brightness(0.9)',
            borderRadius: '0.3rem',
          }}
        >
          QUERO ESSE
        </Button>
      </Link>
    </Flex>
  );
};

export default PlanCard;
