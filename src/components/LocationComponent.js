import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getLocation } from '../services/GeolocationService';

/**
 * A component that displays the user's current location.
 * @returns {JSX.Element} The LocationComponent JSX element.
 */
const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocation();
      setLocation(location);
    };

    fetchLocation();
  }, []);

  return (
    <View>
      {location ? (
        <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
};

export default LocationComponent;