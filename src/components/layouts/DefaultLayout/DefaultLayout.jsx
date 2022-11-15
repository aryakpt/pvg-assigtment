import { Box } from '@mui/material';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Box></Box>
      <Box component="main">{children}</Box>
    </>
  );
};

export default DefaultLayout;
