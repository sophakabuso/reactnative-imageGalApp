import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

/**
 * Launches the device's camera and captures an image.
 * @async
 * @function
 * @returns {Promise<string>} - A Promise that resolves with the captured image's URI.
 */
const captureImage = async () => {
    try {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            return result.uri;
        }
    } catch (error) {
        console.error("Error capturing image: ", error);
    }
};

export default captureImage;
