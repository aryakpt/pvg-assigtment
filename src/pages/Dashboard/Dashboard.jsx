import { DefaultLayout } from '../../components/layouts';
import {
  DashboardSales,
  DashboardSummaryCard,
  DashboardTopAgent,
  DashboardTopProduct,
} from '../../components/dashboard';
import { dataSummaryCard } from '../../constants/data';
import { Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Grid container spacing={4}>
        {dataSummaryCard.map((data, idx) => {
          return (
            <Grid key={idx} item xs={4}>
              <DashboardSummaryCard
                title={data.title}
                amount={data.amount}
                weeklyAverageAmount={data.weeklyAverageAmount}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={4} sx={{ paddingTop: '32px' }}>
        <Grid item xs={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <DashboardSales />
            </Grid>
            <Grid item xs={12}>
              <DashboardTopProduct />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <DashboardTopAgent />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Dashboard;
