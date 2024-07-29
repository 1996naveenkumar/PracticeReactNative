import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Alert, Platform, TextInput } from 'react-native';


const requestPermissions = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ])

        const allPermissionsGranted = Object.values(granted).every(
            (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
        );

        if (allPermissionsGranted) {
            Alert.alert('All permissions granted');
        } else {
            Alert.alert('Some permissions were denied');
        }

        // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //     Alert.alert('You can use camera')
        // } else {
        //     Alert.alert('Permission denied')
        // }

    } catch (err) {
        console.warn(err);
    }
}

const Permissions = () => {
    // useEffect(() => {
    //     requestPermissions()
    // }, [])


    const input = useRef<any>();

    const updateInput = () => {
        input.current.focus();
        input.current.setNativeProps ({
            color: 'black'
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.btn} onPress={async () => requestPermissions()}>
                    <Text style={styles.btnText}>Request Permissions</Text>
                </TouchableOpacity>
            </View>

            {/* Using useRef to change focus on click of button--------------- */}
            <View style={styles.container2}>
                <Text style={{fontSize: 40, color: 'orange'}}>Using useRef</Text>
                <TextInput style={styles.textInput} ref={input} placeholder='Enter something...'></TextInput>
                <TextInput style={styles.textInput} placeholder='Enter something...'></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => updateInput()}>
                    <Text style={styles.btnText}>UPDATE INPUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        marginTop: 50,
        alignItems: 'center',
    },
    btn: {
        width: 200,
        // height: 100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 8,
    },
    textInput: {
        fontSize: 20,
        color: 'red',
    },
    btnText: {
        fontSize: 25,
        color: 'yellow',
        textAlign: 'center',
    },
});

export default Permissions;