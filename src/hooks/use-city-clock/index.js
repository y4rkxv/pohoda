import { useState, useEffect } from 'react';
import { formatCityTime } from '@/pages/home/helpers';
import { MS_PER_MINUTE } from '@/constants';

export const useCityClock = tzOffset => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), MS_PER_MINUTE);
    return () => clearInterval(id);
  }, []);

  const unix = Math.floor(now / 1000);
  return formatCityTime(unix, tzOffset ?? 0);
};
