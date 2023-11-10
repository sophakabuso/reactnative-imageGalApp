import * as ImagePicker from 'expo-image-picker';

const captureImage = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
        console.log(result.uri);
    }
};

export default captureImage;
