const MS_PER_SECOND = 1000;
const TIME_PAD_LENGTH = 2;
const TIME_PAD_CHAR = '0';

export const formatCityTime = (unix, tzOffset = 0) => {
  const d = new Date((unix + tzOffset) * MS_PER_SECOND);
  const hh = String(d.getUTCHours()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  const mm = String(d.getUTCMinutes()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  return `${hh}:${mm}`;
};
