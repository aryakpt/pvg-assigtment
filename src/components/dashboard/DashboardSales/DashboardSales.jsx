import { Box, Typography } from '@mui/material';
import styles from './styles';
import DashboardSalesChart from '../DashboardSalesChart/DashboardSalesChart';
const DashboardSales = () => {
  return (
    <Box sx={styles.dashboardSales}>
      <Box>
        <Typography fontSize="16px" fontWeight={700} color="custom.dark-second">
          Sales Chart
        </Typography>
      </Box>
      <DashboardSalesChart />
    </Box>
  );
};

export default DashboardSales;
