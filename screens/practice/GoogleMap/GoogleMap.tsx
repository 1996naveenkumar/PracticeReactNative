import React, { useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// useEffect(() => {
//   requestLocationPermission();
// }, []);

// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Cool Photo App Location Permission',
//         message:
//           'Cool Photo App needs access to your location ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the location');
//     } else {
//       console.log('Location permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };


const Map = () => {

    return (
        // <View style={{ flex: 1 }} >
            <View style={styles.containerMap}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    // region={{
                    //   latitude: 37.78825,
                    //   longitude: -122.4324,
                    //   latitudeDelta: 0.015,
                    //   longitudeDelta: 0.0121,
                    // }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                </MapView>
            </View>
        // </View>
    );
};


const styles = StyleSheet.create({
    containerMap: {
        ...StyleSheet.absoluteFillObject,
        alignContent: 'center',
        height: 420,
        width: 410,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
});

export default Map; 