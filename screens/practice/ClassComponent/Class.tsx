import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Person extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>Hello, I am a person!</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    
    container: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FACFFF',
    },
    
    text: {
        textAlign: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        color: 'black',
        fontSize: 20,
        padding: 20,
    },
});

export default Person;