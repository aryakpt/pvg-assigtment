import { Box, Typography } from '@mui/material';
import { topProducts } from '../../../constants/data';
import DashboardTopProductCard from '../DashboardTopProductCard/DashboardTopProductCard';

import styles from './styles';
const DashboardTopProduct = () => {
  return (
    <Box sx={styles.dashboardTopProduct}>
      <Box>
        <Typography fontSize="16px" fontWeight={700} color="custom.dark-second">
          Top 5 Products
        </Typography>
      </Box>
      <Box sx={styles.dashboardTopAgentBody}>
        {topProducts.map((data, idx) => {
          return <DashboardTopProductCard key={idx} product={data} />;
        })}
      </Box>
    </Box>
  );
};

export default DashboardTopProduct;
