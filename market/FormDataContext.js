import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FormContext = createContext();

export const ZONES_DATA = [
  {
    id: 'Zone A - Fruit & Avocado Stalls',
    name: 'Zone A - Fruit & Avocado Stalls',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400'
  },
  {
    id: 'Zone B - Tree Tomatoes & Bananas',
    name: 'Zone B - Tree Tomatoes & Bananas',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400'
  },
  {
    id: 'Zone C - General Produce',
    name: 'Zone C - General Produce',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400'
  },
  {
    id: 'Zone D - Fresh Grains & Cereals',
    name: 'Zone D - Fresh Grains & Cereals',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
  },
  {
    id: 'Zone E - Meat & Fish Market',
    name: 'Zone E - Meat & Fish Market',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400'
  },
  {
    id: 'Zone F - Dairy & Egg Section',
    name: 'Zone F - Dairy & Egg Section',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400'
  }
];

export function FormProvider({ children }) {
  const [zone, setZone] = useState(ZONES_DATA[0].id);
  const [vendorName, setVendorName] = useState('Keza Beatrice');
  const [vendorPhone, setVendorPhone] = useState('+250 788 000 123');
  const [stallNumber, setStallNumber] = useState('STALL-A-14');
  const [commodity, setCommodity] = useState('Hass Avocados');
  const [isElevated, setIsElevated] = useState(true);
  const [hasWasteBin, setHasWasteBin] = useState(true);
  const [imageUri, setImageUri] = useState(null);
  const [savedCount, setSavedCount] = useState(0);

  const loadSavedCount = async () => {
    try {
      const existingLogs = await AsyncStorage.getItem('@musanze_fruit_vendors');
      if (existingLogs) {
        setSavedCount(JSON.parse(existingLogs).length);
      }
    } catch (e) {
      console.log('Error reading storage', e);
    }
  };

  useEffect(() => {
    loadSavedCount();
  }, []);

  const resetForm = () => {
    const randomId = Math.floor(10 + Math.random() * 90);
    setStallNumber(`STALL-A-${randomId}`);
    setImageUri(null);
  };

  return (
    <FormContext.Provider
      value={{
        zone, setZone,
        vendorName, setVendorName,
        vendorPhone, setVendorPhone,
        stallNumber, setStallNumber,
        commodity, setCommodity,
        isElevated, setIsElevated,
        hasWasteBin, setHasWasteBin,
        imageUri, setImageUri,
        savedCount, setSavedCount,
        loadSavedCount,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
}