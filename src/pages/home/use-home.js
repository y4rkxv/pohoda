import { useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '@/utils/local-storage';

const LOCAL_STORAGE_KEY = 'pohoda_selected_cities';
const DEFAULT_CITIES = ['Dnipro']; 

export const useHome = () => {
  const [cities, setCities] = useState(() => 
    getStorageItem(LOCAL_STORAGE_KEY, DEFAULT_CITIES)
  );

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEY, cities);
  }, [cities]);

  const addCity = (cityName) => {
    const trimmedCity = cityName.trim();
    if (!trimmedCity) return;

    setCities((prevCities) => {
      const cityExists = prevCities.some(
        (city) => city.toLowerCase() === trimmedCity.toLowerCase()
      );

      if (cityExists) return prevCities; 
      return [...prevCities, trimmedCity]; 
    });
  };


  return {
    cities,
    addCity,
  };
};