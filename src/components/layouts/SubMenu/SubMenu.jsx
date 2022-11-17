import { useState } from 'react';
import { Link, Typography, Box, ListItem } from '@mui/material';
import styles from './styles';
import colorPalette from '../../../styles/colorPalette';
import { ArrowIcon } from '../../../assets';

const SubMenu = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [isSubNavShowed, setIsSubNavShowed] = useState(false);

  const onShowSubNavHandler = () => {
    setIsSubNavShowed(!isSubNavShowed);
  };

  return (
    <Box sx={styles.navLink}>
      {!item.child.length ? (
        <Link
          href={item.path}
          sx={styles.navLinkItem}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Box component="span" sx={styles.navLinkItemLeft}>
            {isHover ? item.icon(colorPalette['primary-klikoo-100']) : item.icon()}
            {item.title}
          </Box>
        </Link>
      ) : (
        <>
          <Box
            sx={styles.navLinkItem}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onShowSubNavHandler}
          >
            <Box component="span" sx={styles.navLinkItemLeft}>
              {isHover ? item.icon(colorPalette['primary-klikoo-100']) : item.icon()}
              {item.title}
            </Box>
            {isSubNavShowed ? (
              <Box>
                <ArrowIcon />
              </Box>
            ) : item.child.length ? (
              <Box sx={{ transform: 'rotate(180deg)' }}>
                <ArrowIcon />
              </Box>
            ) : (
              ''
            )}
          </Box>
          {isSubNavShowed && (
            <Box sx={styles.navLinkDropdown}>
              {item.child.map((item, idx) => {
                return (
                  <Link href={item.path} key={idx} sx={styles.navLinkDropdownItem}>
                    {item.title}
                  </Link>
                );
              })}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default SubMenu;
