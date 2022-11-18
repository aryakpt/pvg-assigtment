const styles = {
  dashboardSummaryCard: {
    height: '100%',
    minHeight: '121px',
    backgroundColor: 'custom.white',
    boxShadow: '0px 0px 26px #F0F1FF',
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dashboardSummaryCardFooterTestStyle: (variant) => {
    return {
      color:
        variant === 'increase'
          ? 'custom.green-1'
          : variant === 'decrease'
          ? 'custom.red-1'
          : 'custom.orange-1',
      display: 'flex',
      alignItems: 'center',
      float: 'right',
    };
  },
};

export default styles;
