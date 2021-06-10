import dayjs from 'dayjs';

export const LogoSettings = {
  HEADER: {
    width: 81,
    height: 41,
  },

  FOOTER: {
    width: 64,
    height: 33,
  },
};

export const ListSettings = {
  POINTS_AMOUNT: 4,
};

export const formatDate = (date) => dayjs(date).format('MMMM YYYY');
