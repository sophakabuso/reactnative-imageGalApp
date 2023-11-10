import React from 'react';
import { View } from 'react-native';
import ImageViewer from '../components/ImageViewer';

const ImageScreen = ({ route }) => {
    const { image } = route.params;

    return (
        <View>
            <ImageViewer image={image} />
        </View>
    );
};

export default ImageScreen