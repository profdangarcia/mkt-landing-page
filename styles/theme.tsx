/* eslint-disable import/prefer-default-export */

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#2C3333',
      800: '#395B64',
      700: '#A5C9CA',
      600: '#E7F6F2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        fontSize: {
          sm: '87.5%', // 14px
          md: '93.75%', // 15px
          lg: '100%', // 16px
        },
      },
      body: {
        bg: 'brand.900',
        color: 'brand.600',
      },
    },
  },
});
