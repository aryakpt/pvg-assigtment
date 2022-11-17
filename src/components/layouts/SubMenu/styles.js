const styles = {
  navLinkItem: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '59px',
    height: '100%',
    paddingInline: '50px 30px',
    // marginBlock: '20px',
    width: '100%',
    textDecoration: 'none',
    color: 'custom.dark-second',
    fill: 'custom.dark-second',
    transition: 'all 0.1s ease',
    '&:hover': {
      color: 'custom.primary-klikoo-100',
      fill: 'custom.primary-klikoo-100',
      borderRight: 4,
      borderColor: 'custom.primary-klikoo-100',
    },
  },
  navLinkItemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '19.5px',
  },
  navLinkDropdown: {
    display: 'flex',
    flexDirection: 'column',
  },
  navLinkDropdownItem: {
    paddingBlock: '16px',
    paddingLeft: '92px',
    textDecoration: 'none',
    color: 'custom.dark-second',
    fill: 'custom.dark-second',
    transition: 'all 0.1s ease',
    '&:hover': {
      color: 'custom.primary-klikoo-100',
      fill: 'custom.primary-klikoo-100',
      borderRight: 4,
      borderColor: 'custom.primary-klikoo-100',
    },
  },
};

export default styles;
