const DashboardIcon = ({ variantColor = '#7A7A7A' }) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1667 21.5V9.83333H21.5V21.5H12.1667ZM0.5 12.1667V0.5H9.83333V12.1667H0.5ZM7.5 9.83333V2.83333H2.83333V9.83333H7.5ZM0.5 21.5V14.5H9.83333V21.5H0.5ZM2.83333 19.1667H7.5V16.8333H2.83333V19.1667ZM14.5 19.1667H19.1667V12.1667H14.5V19.1667ZM12.1667 0.5H21.5V7.5H12.1667V0.5ZM14.5 2.83333V5.16667H19.1667V2.83333H14.5Z"
        fill={variantColor}
      />
    </svg>
  );
};

export default DashboardIcon;
