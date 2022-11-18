const styles = {
  header: {
    minHeight: '129px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    minHeight: '129px',
    width: '1232px',
    maxWidth: '100%',
    paddingInline: '60px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerRight: {
    backgroundColor: 'custom.secondary-klikoo-20',
    minHeight: '129px',
    width: '408px',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  },
  headerRightOpened: {
    backgroundColor: 'custom.secondary-klikoo-20',
    width: '408px',
    maxWidth: '100%',
    position: 'absolute',
    top: '129px',
    right: 0,
    bottom: 0,
    zIndex: 0,
    padding: '32px',
  },
};

export default styles;
