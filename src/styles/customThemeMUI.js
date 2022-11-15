import { createTheme } from '@mui/material/styles';
import colorPalette from './colorPalette';

const customThemeMUI = createTheme({
  palette: {
    custom: {
      black: colorPalette['black'],
      white: colorPalette['white'],
      'blue-1': colorPalette['blue-1'],
      'blue-2': colorPalette['blue-2'],
      'red-1': colorPalette['red-1'],
      'green-1': colorPalette['green-1'],
      'orange-1': colorPalette['orange-1'],
      'gray-1': colorPalette['gray-1'],
      'gray-2': colorPalette['gray-2'],
    },
  },
});

export default customThemeMUI;
