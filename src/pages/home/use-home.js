import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'pohoda_selected_cities';
const DEFAULT_CITIES = ['Dnipro']; 

export const useHome = () => {
  const [cities, setCities] = useState(() => {
    try {
      const savedCities = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedCities ? JSON.parse(savedCities) : DEFAULT_CITIES;
    } catch (error) {
      console.error('Error loading cities from localStorage:', error);
      return DEFAULT_CITIES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cities));
    } catch (error) {
      console.error('Error saving cities to localStorage:', error);
    }
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

  
  const removeCity = (cityToRemove) => {
    setCities((prevCities) => 
      prevCities.filter((city) => city.toLowerCase() !== cityToRemove.toLowerCase())
    );
  };

  return {
    cities,
    addCity,
    removeCity, 
  };
};