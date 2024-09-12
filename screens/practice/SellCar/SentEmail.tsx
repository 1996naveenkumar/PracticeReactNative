import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


class SellCarSentEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navLogin = () => this.props.navigation.navigate('SellCarLogin');

    render() {
        return (

            <View style={{ backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity style={styles.backBtn} onPress={this.navLogin}>
                    <Entypo name="cross" size={28} color="gray" />
                </TouchableOpacity>
                <View style={styles.mainView}>
                    <Image source={require('./assets/almostDone.png')} style={styles.img} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Almost done!</Text>
                        <Text style={styles.description}>
                            We've sent an email to <Text style={{ fontWeight: '700', color: 'black' }}>
                                EMAIL@gmail.com
                            </Text> Please check your inbox and follow instructions to reset your password
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.navLogin}>
                    <Text style={styles.btnTxt}>Resend</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    backBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 50,
        // backgroundColor: 'blue',
    },

    mainView: {
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red'
    },

    img: {
        marginTop: 160,
        width: 180,
        height: 180,
    },

    textContainer: {
        marginTop: 20,
        gap: 5,
        height: 100,
        width: '80%',
        // backgroundColor: 'blue',
    },

    title: {
        fontSize: 20,
        fontWeight: '800',
        color: 'black',
        textAlign: 'center'
    },

    description: {
        color: '#92a2bb',
        textAlign: 'center',
    },

    button: {
        width: "90%",
        alignSelf: 'center',
        height: 50,
        backgroundColor: '#2f74fa',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 140,
        position: 'absolute',
    },

    btnTxt: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    }

});

export default SellCarSentEmail;
