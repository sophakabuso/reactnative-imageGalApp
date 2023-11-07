import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Geocoder from 'react-native-geocoding';

// Initialize the Geocoder module with your Google Maps Geocoding API key
Geocoder.init('YOUR_GOOGLE_MAPS_API_KEY');

const ImageViewer = ({ image }) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Convert the latitude and longitude into a location name
    Geocoder.from(image.latitude, image.longitude)
      .then((json) => {
        var addressComponent = json.results[0].address_components[0];
        setLocation(addressComponent.long_name);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image.path }} />
      <Text style={styles.text}>Location: {location}</Text>
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