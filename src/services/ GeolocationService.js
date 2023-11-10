import Geolocation from '@react-native-community/geolocation';

/**
 * Returns a promise that resolves to the current device location.
 * @returns {Promise<Position>} A promise that resolves to the current device location.
 */
export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            (error) => {
                reject(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    });
};