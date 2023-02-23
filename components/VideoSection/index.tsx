/* eslint-disable react/style-prop-object */
import { Flex, Text, Link, Button } from '@chakra-ui/react';
import config from '../../helpers/config';

const VideoSection: React.FC = () => {
  const { cta } = config;
  return (
    <Flex direction="column" w="100%" align="center" gap={8} justify="center">
      <Text textAlign="center" fontSize={24}>
        {cta.videoCta}
      </Text>
      <Flex w="100%" pb="56.25%" position="relative">
        <iframe
          src={`https://www.youtube.com/embed/${cta.videoId}`}
          title={cta.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        />
      </Flex>
      <Text fontSize={28} fontWeight="bold" textAlign="center">
        {cta.videoCtaClick}
      </Text>
      <Link href={cta.checkoutUrl} isExternal w="90%">
        <Button
          color="brand.600"
          bg="brand.800"
          w="100%"
          h={24}
          fontSize={32}
          _hover={{ bg: 'brand.700' }}
        >
          {cta.videoCtaButton}
        </Button>
      </Link>
    </Flex>
  );
};

export default VideoSection;
