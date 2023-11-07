import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

const ImageGrid = ({ images }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Image style={styles.image} source={{ uri: item.path }} />
      )}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageGrid;