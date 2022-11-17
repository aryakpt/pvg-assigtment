import { Box } from '@mui/material';
import Header from '../Header/Header';
import SideNavbar from '../SideNavbar/SideNavbar';
import styles from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <SideNavbar />
      <Box sx={styles.main}>
        <Header />
        <Box component="main" sx={styles.mainLayout}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
