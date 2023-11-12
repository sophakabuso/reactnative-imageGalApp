import * as ImagePicker from 'expo-image-picker';

/**
 * Launches the device's camera and captures an image.
 * @async
 * @function
 * @returns {Promise<void>} - A Promise that resolves with the captured image's URI.
 */
const captureImage = async () => {
    try {
        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            console.log(result.uri);
        }
    } catch (error) {
        console.log(error);
    }
};

export default captureImage;
