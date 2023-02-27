/* eslint-disable import/prefer-default-export */

import { extendTheme } from '@chakra-ui/react';
import config from '../helpers/config';

const { palette } = config;

export const theme = extendTheme({
  colors: {
    brand: {
      900: palette[900],
      800: palette[800],
      700: palette[700],
      600: palette[600],
    },
    plans: {
      plan1: palette.plan1,
      plan2: palette.plan2,
      plan3: palette.plan3,
    },
    success: palette.success,
    error: palette.error,
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
