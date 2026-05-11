import { MS_PER_SECOND, TIME_PAD_LENGTH, TIME_PAD_CHAR } from '@/constants';

export const formatCityTime = (unix, tzOffset = 0) => {
  const d = new Date((unix + tzOffset) * MS_PER_SECOND);
  const hh = String(d.getUTCHours()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  const mm = String(d.getUTCMinutes()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  return `${hh}:${mm}`;
};
