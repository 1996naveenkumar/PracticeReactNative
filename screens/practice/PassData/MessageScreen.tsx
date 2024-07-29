import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const MessageScreen = (props: any) => {
    // const route = useRoute();
    const { id } = props.route.params;
    // const message = props.route.params.name

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>{message}</Text> */}
            <Text>Message Screen</Text>           
            <Text>Message ID: {id}</Text>
            
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 50,
    },
});

export default MessageScreen;