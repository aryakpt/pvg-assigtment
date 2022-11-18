import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { IncreaseIcon, DecreaseIcon, SameIcon } from '../../../assets';
import styles from './styles';

const DashboardSummaryCard = ({ title, amount, weeklyAverageAmount }) => {
  const [variant, setVariant] = useState('');
  const [percentage, setPercentage] = useState(0);

  const getVariant = (decimal) => {
    if (decimal < 0) {
      setVariant('decrease');
    } else if (decimal > 0) {
      setVariant('increase');
    } else if (decimal === 0) {
      setVariant('same');
    }
  };

  useEffect(() => {
    const decimal = (amount - weeklyAverageAmount) / weeklyAverageAmount;
    setPercentage(Math.abs(decimal * 100).toFixed(1));
    getVariant(decimal);
  }, [amount, weeklyAverageAmount]);

  return (
    <Box sx={styles.dashboardSummaryCard}>
      <Box sx={styles.dashboardSummaryCardHeader}>
        <Typography fontSize="16px" fontWeight={700} color="custom.dark-second">
          {title}
        </Typography>
      </Box>
      <Box sx={styles.dashboardSummaryCardBody}>
        <Typography fontSize="30px" fontWeight={700} color="custom.black">
          Rp {amount.toLocaleString('id')}
        </Typography>
      </Box>
      <Box sx={styles.dashboardSummaryCardFooter}>
        <Typography
          fontSize="14px"
          fontWeight={700}
          sx={styles.dashboardSummaryCardFooterTestStyle(variant)}
        >
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', marginRight: '6px' }}>
            {variant === 'same' ? (
              <SameIcon />
            ) : variant === 'increase' ? (
              <IncreaseIcon />
            ) : (
              <DecreaseIcon />
            )}
          </Box>
          {variant === 'same' ? ` same as 7 days ago` : `${percentage}% compared to 7 days ago`}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardSummaryCard;
