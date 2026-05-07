import { useState, useEffect } from 'react';
import { formatCityTime } from '@/pages/home/helpers';

const MS_PER_MINUTE = 60_000;

export const useCityClock = tzOffset => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), MS_PER_MINUTE);
    return () => clearInterval(id);
  }, []);

  const unix = Math.floor(now / 1000);
  return formatCityTime(unix, tzOffset ?? 0);
};
