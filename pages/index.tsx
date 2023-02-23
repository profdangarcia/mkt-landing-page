import { Flex, Heading } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import VideoSection from '../components/VideoSection';
import Wrapper from '../components/Wrapper';
import config from '../helpers/config';

const Home: React.FC = () => {
  return (
    <>
      <Seo />

      <Wrapper>
        <Flex
          as="main"
          py="0.5rem"
          direction="column"
          align="center"
          minH="100vh"
        >
          <Heading as="h1" mb={16} mt={8} color="brand.800">
            {config.seo.h1}
          </Heading>

          <VideoSection />
        </Flex>
      </Wrapper>

      <Footer />
    </>
  );
};

export default Home;
