import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ImageGrid from '../components/ImageGrid';
import { getImages, insertImage, deleteImage } from '../services/Database';
import { captureImage } from '../services/ImageService';
import { getLocation } from '../services/GeolocationService'; // Updated import

/**
 * Gallery screen component that displays a list of images and allows the user to add new images.
 * @returns {JSX.Element} Gallery screen UI.
 */
const GalleryScreen = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getImages().then((imagesFromDB) => setImages(imagesFromDB));
    }, []);

    /**
     * Adds a new image to the gallery.
     * @returns {Promise<void>}
     */
    const addImage = async () => {
        const image = await captureImage({ quality: 0.5 });
        const location = await getLocation(); // Updated function call
        const newImage = {
            path: image.uri,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: Date.now(),
        };
        await insertImage(newImage);
        setImages((prevImages) => [...prevImages, newImage]);
    };

    /**
     * Deletes an image from the gallery.
     * @param {number} id - The ID of the image to delete.
     * @returns {Promise<void>}
     */
    const deleteImageById = async (id) => {
        await deleteImage(id);
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    return (
        <View style={styles.container}>
            <Button title="Add Image" onPress={addImage} />
            <ImageGrid images={images} onDeleteImage={deleteImageById} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GalleryScreen;