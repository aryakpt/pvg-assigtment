import { Box } from '@mui/material';
import SideNavbar from '../SideNavbar/SideNavbar';
import styles from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <Box sx={styles.defaultLayout}>
      <SideNavbar />
      <Box sx={styles.mainLayout} component="main">
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
