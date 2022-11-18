import { Box, Typography } from '@mui/material';
import styles from './styles';
const DashboardTopProductCard = ({ product }) => {
  return (
    <Box sx={styles.dashboardTopProductCard}>
      <img src={product.image} alt={product.name} style={styles.dashboardTopProductCardImage} />
      <Typography fontSize="16px" fontWeight={700} color="custom.primary-klikoo-100">
        {product.name}
      </Typography>
      <Typography
        fontSize="14px"
        fontWeight={700}
        color="custom.dark-second"
        sx={{ opacity: product.price ? '100%' : '0%' }}
      >
        {product.price.toLocaleString('id')}
      </Typography>
      <Typography fontSize="12px" fontWeight={700} color="custom.black">
        <Typography component={'span'} fontSize="18px" fontWeight={700} color="custom.black">
          {product.transaction}
        </Typography>{' '}
        transactions
      </Typography>
    </Box>
  );
};

export default DashboardTopProductCard;
