import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import logger from '../utility/logger';

export default useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log('Error getting location', error);
    }
  };

  return location;
};
