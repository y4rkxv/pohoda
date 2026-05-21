import { useState } from 'react'; 
import { DEFAULT_CITY } from '@/pages/home/constants';

export const useHome = () => {

  const [cities, setCities] = useState([DEFAULT_CITY]);

  const addCity = (newCity) => {
    if (!cities.includes(newCity)) {
      setCities([...cities, newCity]);
    }
  };


  return {
    cities,
    addCity
  };
};