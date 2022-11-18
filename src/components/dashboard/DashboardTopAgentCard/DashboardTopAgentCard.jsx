import { Box, Avatar, Typography, Grid } from '@mui/material';
import styles from './styles';
const DashboardTopAgentCard = ({ agent }) => {
  return (
    <Box sx={styles.dashboardTopAgentCard}>
      <Avatar alt="avatar" src={agent.avatar} sx={styles.dashboardTopAgentCardAvatar} />
      <Box>
        <Typography sx={styles.dashboardTopAgentCardTitle}>{agent.name}</Typography>
        <Grid container spacing={2}>
          <Grid item sx={6}>
            <Typography sx={styles.dashboardTopAgentCardName}>Profit</Typography>
            <Typography sx={styles.dashboardTopAgentCardName}>Sales</Typography>
            <Typography sx={styles.dashboardTopAgentCardName}>Transaction</Typography>
          </Grid>
          <Grid item sx={6}>
            <Typography sx={styles.dashboardTopAgentCardValue}>
              Rp {agent.profit.toLocaleString('id')}
            </Typography>
            <Typography sx={styles.dashboardTopAgentCardValue}>
              Rp {agent.sales.toLocaleString('id')}
            </Typography>
            <Typography sx={styles.dashboardTopAgentCardValue}>
              {agent.transaction.toLocaleString('id')} transactions
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardTopAgentCard;
