import * as Location from 'expo-location';

/**
 * Gets the current location of the device.
 * @returns {Promise<void>} A promise that resolves with the current location of the device.
 */
const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    return location;
};

export default getLocation;
