import dayjs from 'dayjs';

export const getFormattedDateString = (date?: string) => {
  if (!date) return '';
  return dayjs(date).format('YYYY.MM.DD A hh:mm:sss');
};

export const getFormattedYearToDateString = (date?: string) => {
  if (!date) return '';
  return dayjs(date).format('YYYY.MM.DD');
};
