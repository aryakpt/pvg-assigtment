import { Box, Typography } from '@mui/material';
import { topAgents } from '../../../constants/data';
import DashboardTopAgentCard from '../DashboardTopAgentCard/DashboardTopAgentCard';
import styles from './styles';
const DashboardTopAgent = () => {
  return (
    <Box sx={styles.dashboardTopAgent}>
      <Box>
        <Typography fontSize="16px" fontWeight={700} color="custom.dark-second">
          Top 5 Agents
        </Typography>
      </Box>
      <Box sx={styles.dashboardTopAgentBody}>
        {topAgents.map((data, idx) => {
          return <DashboardTopAgentCard key={idx} agent={data} />;
        })}
      </Box>
    </Box>
  );
};

export default DashboardTopAgent;
