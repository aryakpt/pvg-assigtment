import { Box, Typography } from '@mui/material';
import styles from './styles';
import { NAV_ITEM } from '../../../constants/nav-item';
import SubMenu from '../SubMenu/SubMenu';
const SideNavbar = () => {
  return (
    <Box component="aside" sx={styles.sideNavbar}>
      <Box sx={styles.sideNavbarBrand}>
        <Typography variant={'h1'} fontWeight={700} color="custom.primary-klikoo-100">
          SalesDash
        </Typography>
      </Box>
      <Box component="nav" sx={styles.sideNavbarNav}>
        {NAV_ITEM.map((item, idx) => {
          return <SubMenu item={item} key={idx} />;
        })}
      </Box>
    </Box>
  );
};

export default SideNavbar;
