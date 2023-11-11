import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

/**
 * Renders a grid of images with their respective latitude and longitude.
 * @param {Object[]} images - An array of objects containing image data.
 * @param {string} images[].id - The unique identifier of the image.
 * @param {string} images[].path - The path to the image file.
 * @param {number} images[].latitude - The latitude of the location where the image was taken.
 * @param {number} images[].longitude - The longitude of the location where the image was taken.
 * @returns {JSX.Element} - A FlatList component containing the images and their location data.
 */
const ImageGrid = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.path }} />
          <Text>Latitude: {item.latitude}</Text>
          <Text>Longitude: {item.longitude}</Text>
        </View>
      )}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageGrid;