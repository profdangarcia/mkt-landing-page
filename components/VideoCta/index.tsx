import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { SiGnuprivacyguard } from 'react-icons/si';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BiCheckDouble } from 'react-icons/bi';
import config from '../../helpers/config';
import IconedInfo from '../IconedInfo';

const VideoCta: React.FC = () => {
  const { cta } = config;
  return (
    <Flex direction="column" gap={8} w="100%" align="center">
      <Text fontSize="1.75rem" fontWeight="bold" textAlign="center">
        {cta.videoCtaClick}
      </Text>
      <Link href={cta.checkoutUrl} isExternal w={{ base: '100%', md: '90%' }}>
        <Button
          color="brand.600"
          bg="brand.800"
          w="100%"
          h={24}
          fontSize="2rem"
          _hover={{ bg: 'brand.700' }}
        >
          {cta.videoCtaButton}
        </Button>
      </Link>
      <Flex justify="space-around" w="100%">
        <IconedInfo
          icon={<SiGnuprivacyguard />}
          title="Privacidade"
          info="Sua informação 100% segura"
        />
        <IconedInfo
          icon={<RiSecurePaymentLine />}
          title="Compra segura"
          info="Ambiente seguro e autenticado"
        />
        <IconedInfo
          icon={<BiCheckDouble />}
          title="Conteúdo aprovado"
          info="100% revisado e aprovado"
        />
      </Flex>
    </Flex>
  );
};

export default VideoCta;
