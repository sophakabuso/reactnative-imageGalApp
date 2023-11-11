import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ImageGrid from '../components/ImageGrid';
import { getImages, insertImage, deleteImage } from '../services/Database';
import captureImage from '../services/ImageService';
import getLocation from '../services/GeolocationService';

const GalleryScreen = ({ navigation }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages().then((imagesFromDB) => setImages(imagesFromDB));
        navigation.setOptions({ title: 'My Gallery' });
    }, []);

    const addImage = async () => {
        const image = await captureImage({ quality: 0.5 });
        const location = await getLocation();
        const newImage = {
            path: image.uri,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: Date.now(),
        };
        await insertImage(newImage);
        setImages((prevImages) => [...prevImages, newImage]);
    };

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