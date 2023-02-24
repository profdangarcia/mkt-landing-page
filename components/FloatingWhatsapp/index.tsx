import { Flex, Link, keyframes } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
import config from '../../helpers/config';

const floating = keyframes`
  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

const FloatingWhatsapp: React.FC = () => {
  const { whatsapp } = config;
  return (
    <Flex
      align="center"
      justify="center"
      borderRadius="50%"
      color="white"
      bg="#25d366"
      position="fixed"
      w="3.75rem"
      h="3.75rem"
      zIndex={1001}
      right="2rem"
      bottom="2rem"
      fontSize="2rem"
      animation={`${floating} 6s ease-in-out infinite`}
    >
      <Link
        isExternal
        href={`https://wa.me/55${whatsapp.number}?text=${whatsapp.message}`}
      >
        <BsWhatsapp />
      </Link>
    </Flex>
  );
};

export default FloatingWhatsapp;
