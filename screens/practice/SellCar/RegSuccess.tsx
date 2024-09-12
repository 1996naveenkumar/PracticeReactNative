import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import stylesConstant from './StyleConstant/StylesConstant';



class SellCarRegSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navLogin = () => this.props.navigation.navigate('SellCarLogin');

    render() {
        return (
            <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
                <TouchableOpacity style={styles.crossBtn} onPress={this.navLogin}>
                    <Entypo name="cross" size={30} color="gray" />
                </TouchableOpacity>
                <View style={styles.mainView}>
                    <Image source={require('./assets/success.png')} style={styles.img} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Successfully Registered</Text>
                        <Text style={styles.description}>Your account has been registered successfully, now let's enjoy Car features!</Text>
                    </View>
                </View>
                <TouchableOpacity style={stylesConstant.navBottomBlueBtn} onPress={this.navLogin}>
                    <Text style={stylesConstant.navBlueBtnTxt}>Back to Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    crossBtn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
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
        width: 230,
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

export default SellCarRegSuccess;
