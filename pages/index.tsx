import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ResultsSection from '../components/ResultsSection';
import Seo from '../components/Seo';
import VideoSection from '../components/VideoSection';
import Wrapper from '../components/Wrapper';
import config from '../helpers/config';

const Home: React.FC = () => {
  return (
    <>
      <Seo />

      <Wrapper>
        <Flex as="main" direction="column" align="center" minH="100vh" py={8}>
          <Image
            src={config.logo}
            alt={config.seo.title}
            width={200}
            height={118}
          />
          <Heading as="h1" mb={16} mt={4} color="brand.800">
            {config.seo.h1}
          </Heading>

          <VideoSection />
        </Flex>
      </Wrapper>
      <ResultsSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Home;
