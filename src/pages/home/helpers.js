import { MS_PER_SECOND, TIME_PAD_LENGTH, TIME_PAD_CHAR } from '@/pages/home/constants';

export const formatCityTime = (unix, tzOffset = 0) => {
  const d = new Date((unix + tzOffset) * MS_PER_SECOND);
  const hh = String(d.getUTCHours()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  const mm = String(d.getUTCMinutes()).padStart(TIME_PAD_LENGTH, TIME_PAD_CHAR);
  return `${hh}:${mm}`;
};


export const getStorageItem = (key, fallbackValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallbackValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return fallbackValue;
  }
};

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};