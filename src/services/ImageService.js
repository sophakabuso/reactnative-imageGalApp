import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const captureImage = (options) => {
    return new Promise((resolve, reject) => {
        launchCamera(options, (response) => {
            if (response.didCancel) {
                reject('User cancelled image picker');
            } else if (response.error) {
                reject('ImagePicker Error: ', response.error);
            } else {
                resolve(response);
            }
        });
    });
};

/**
 * Selects an image from the device's library using the launchImageLibrary method from react-native-image-picker.
 * @param {object} options - Options for the image picker.
 * @returns {Promise<object>} - A promise that resolves with the selected image or rejects with an error message.
 */
export const selectImageFromLibrary = (options) => {
    return new Promise((resolve, reject) => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                reject('User cancelled image picker');
            } else if (response.error) {
                reject('ImagePicker Error: ', response.error);
            } else {
                resolve(response);
            }
        });
    });
};