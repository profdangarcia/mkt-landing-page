/* eslint-disable react/style-prop-object */
import { Flex, Text } from '@chakra-ui/react';

import config from '../../helpers/config';
import VideoCta from '../VideoCta';

const VideoSection: React.FC = () => {
  const { cta } = config;
  return (
    <Flex direction="column" w="100%" align="center" gap={8} justify="center">
      <Text textAlign="center" fontSize="1.5rem">
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
      <VideoCta />
    </Flex>
  );
};

export default VideoSection;
