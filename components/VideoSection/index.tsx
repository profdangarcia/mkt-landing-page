/* eslint-disable react/style-prop-object */
import { Flex, Text } from '@chakra-ui/react';
import config from '../../helpers/config';

const VideoSection: React.FC = () => {
  const { cta } = config;
  return (
    <Flex direction="column" w="100%" align="center">
      <Text textAlign="center" fontSize={24} mb={8}>
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
    </Flex>
  );
};

export default VideoSection;
