import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import getLocation from '../services/GeolocationService';

const ImageViewer = ({ image }) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocation();
      setLocation(location);
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image.path }} />
      <Text style={styles.text}>Location: {location ? `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}` : 'Fetching location...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    marginTop: 10,
  },
});

export default ImageViewer;