import { createTheme } from '@mui/material/styles';
import colorPalette from './colorPalette';

const customThemeMUI = createTheme({
  palette: {
    custom: {
      black: colorPalette['black'],
      white: colorPalette['white'],
      dark: colorPalette['dark'],
      'blue-1': colorPalette['blue-1'],
      'blue-2': colorPalette['blue-2'],
      'red-1': colorPalette['red-1'],
      'green-1': colorPalette['green-1'],
      'orange-1': colorPalette['orange-1'],
      'dark-second': colorPalette['dark-second'],
      'gray-2': colorPalette['gray-2'],
      'secondary-klikoo-20': colorPalette['secondary-klikoo-20'],
      'primary-klikoo-60': colorPalette['primary-klikoo-60'],
      'primary-klikoo-100': colorPalette['primary-klikoo-100'],
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '30px',
      lineHeight: '40px',
    },
  },
});

export default customThemeMUI;
