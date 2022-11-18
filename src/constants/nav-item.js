import customThemeMUI from '../styles/customThemeMUI';
import {
  LogoutIcon,
  DashboardIcon,
  BalanceIcon,
  TransactionIcon,
  ProductIcon,
  ChannelIcon,
} from '../assets';
const { palette } = customThemeMUI;

const NAV_ITEM = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (color = palette.custom['dark-second']) => {
      return <DashboardIcon variantColor={color} />;
    },
    child: [],
  },
  {
    title: 'Balance',
    path: '/balance',
    icon: (color = palette.custom['dark-second']) => {
      return <BalanceIcon variantColor={color} />;
    },
    child: [],
  },
  {
    title: 'Transaction',
    path: '/transaction',
    icon: (color = palette.custom['dark-second']) => {
      return <TransactionIcon variantColor={color} />;
    },
    child: [],
  },
  {
    title: 'Product',
    path: '/product',
    icon: (color = palette.custom['dark-second']) => {
      return <ProductIcon variantColor={color} />;
    },
    child: [],
  },
  {
    title: 'Channel',
    path: '/channel/agent',
    icon: (color = palette.custom['dark-second']) => {
      return <ChannelIcon variantColor={color} />;
    },
    child: [
      {
        title: 'Agent',
        path: '/channel/agent',
      },
      {
        title: 'Balance',
        path: '/channel/balance',
      },
      {
        title: 'Transaction',
        path: '/channel/transaction',
      },
    ],
  },
  {
    title: 'Logout',
    path: '/',
    icon: (color = palette.custom['dark-second']) => {
      return <LogoutIcon variantColor={color} />;
    },
    child: [],
  },
];

export { NAV_ITEM };
