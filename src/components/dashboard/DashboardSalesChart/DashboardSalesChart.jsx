import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import colorPalette from '../../../styles/colorPalette';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardSalesChart = () => {
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 8000000,
        ticks: {
          stepSize: 2000000,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = ['04 Nov 2022', '06 Nov 2022', '08 Nov 2022', '10 Nov 2022'];

  const data = {
    labels,
    datasets: [
      {
        data: [3800000, 4200000, 2200000, 4500000],
        borderColor: colorPalette['primary-klikoo-100'],
        backgroundColor: 'transparent',
        tension: 0.3,
        // fill: 'red',
      },
    ],
  };
  return (
    <Box>
      {' '}
      <Line options={options} data={data} />
    </Box>
  );
};

export default DashboardSalesChart;
