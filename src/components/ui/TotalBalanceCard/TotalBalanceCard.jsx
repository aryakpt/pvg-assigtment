import { Box, Button, Typography } from '@mui/material';
import { MoreVerticalIcon } from '../../../assets';
import styles from './styles';

const TotalBalanceCard = () => {
  return (
    <Box sx={styles.totalBalanceCard}>
      <Box sx={styles.totalBalanceCardHeader}>
        <Typography fontSize="18px" fontWeight={600} color="custom.dark-second">
          Total Balance
        </Typography>
        <Box
          component="span"
          sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
        >
          <MoreVerticalIcon />
        </Box>
      </Box>
      <Box sx={styles.totalBalanceCardBody}>
        <Typography variant="h1" component="p" fontWeight={700}>
          Rp 1.580.000.000
        </Typography>
      </Box>
      <Box sx={styles.totalBalanceCardFooter}>
        <Button
          variant="contained"
          sx={{
            width: '80%',
            textTransform: 'capitalize',
            borderRadius: '12px',
            paddingBlock: '15px',
            backgroundColor: 'custom.primary-klikoo-100',
            '&:hover': {
              backgroundColor: 'custom.primary-klikoo-100',
            },
          }}
        >
          Top Up
        </Button>
      </Box>
    </Box>
  );
};

export default TotalBalanceCard;
