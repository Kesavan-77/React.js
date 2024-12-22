import React, { useState, useEffect } from 'react';
import { MENU_URL } from './Constant';

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const response = await fetch(MENU_URL + resId);
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const jsonData = await response.json();
        setResData(jsonData);
        console.log(resData);
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchRestaurantData();
  }, [resId]);

  return resData;
}

export default useRestaurantMenu;
