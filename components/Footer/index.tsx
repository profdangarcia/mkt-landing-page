import { Flex, Link, Text, useTheme } from '@chakra-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Flex
      as="footer"
      w="100%"
      h="4.25rem"
      justify="center"
      align="center"
      borderTop={`1px solid ${theme.colors.brand['600']}`}
    >
      Desenvolvido por
      <Link
        href="https://dangarcia-devel.vercel.app/"
        isExternal
        display="flex"
      >
        <Text as="span" ml="0.25rem" display="block" fontWeight="bold">
          Dan Garcia ☕
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
