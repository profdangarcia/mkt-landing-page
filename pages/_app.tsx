/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
