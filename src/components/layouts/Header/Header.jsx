import { useState, useEffect } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ProfileImage } from '../../../assets/images';
import styles from './styles';
import { ArrowIcon } from '../../../assets';
import { TotalBalanceCard } from '../../ui';
const Header = () => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [isProfileShowed, setIsProfileShowed] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname.split('/');
    const title = pathname[pathname.length - 1];
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
    const today = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setTodayDate(`${day}, ${today}`);
    setHeaderTitle(title ? title : 'dashboard');
  }, []);

  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.headerLeft}>
        <Typography variant="h1" fontWeight={700} color="custom.dark">
          {headerTitle && headerTitle[0].toUpperCase() + headerTitle.slice(1)}
        </Typography>
        <Typography fontWeight={700} fontSize="18px" color="custom.dark-second">
          Today's date: {todayDate}
        </Typography>
      </Box>
      <Box sx={styles.headerRight}>
        <Avatar
          alt="profile"
          src={ProfileImage}
          sx={{ border: 3, borderColor: 'custom.primary-klikoo-60' }}
        />
        <Box sx={{ cursor: 'pointer' }} onClick={() => setIsProfileShowed(!isProfileShowed)}>
          <Typography fontWeight={700} fontSize="20px" color="custom.dark">
            Budi Budiman
          </Typography>
          <Typography fontWeight={700} fontSize="16px" color="custom.dark-second">
            Owner at PT Suka Maju
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
          onClick={() => setIsProfileShowed(!isProfileShowed)}
        >
          <ArrowIcon variantColor={'custom.dark'} />
        </Box>
        {isProfileShowed && (
          <Box sx={styles.headerRightOpened}>
            <TotalBalanceCard />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
