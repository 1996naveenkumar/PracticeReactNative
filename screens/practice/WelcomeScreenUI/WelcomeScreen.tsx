import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ImageBackground, StatusBar, useColorScheme } from 'react-native';

const backgroundImg = require("./assets/background.png")
const FBLogo = require("./assets/FBLogin.png")
const GoogleLogo = require("./assets/Google.png")
const AppleLogo = require("./assets/Apple.png")
const FrameIcon = require("./assets/Frame.png")
const BlackColor = '#1C222A'
const WhiteColor = '#FFFFFF'
const TextColor = '#585858'


const WelcomeLogin = () => {
    const colorScheme = useColorScheme();
    

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.backgroundImage} >

                <StatusBar translucent backgroundColor='transparent' />

                {/* <View style={styles.container1}>
                    <TouchableOpacity style={styles.btnSignin}>
                        <Text style={styles.btnSignin}>Sign up</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={[styles.container2, { backgroundColor: colorScheme === 'light' ? WhiteColor : BlackColor }]} >
                    <Text style={[styles.title, { color: '#F7404B' }]}>Welcome Back!</Text>
                    <Text style={[styles.subTitle, { color: colorScheme === 'light' ? BlackColor : WhiteColor }]}>Please sign in to account.</Text>

                    <View style={styles.inputBox}>
                        <TextInput placeholder='Email/Number' placeholderTextColor= 'gray'  style={ styles.inputText }></TextInput>
                        <TextInput placeholder='Password' placeholderTextColor='gray' style={ styles.inputText }></TextInput>
                        <View style={styles.FPasswordBox}>
                            <Text style={[styles.forgotText, {color: colorScheme === 'light' ? BlackColor : WhiteColor }]}>Forgot Password?</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnSignin}>
                        <Text style={styles.SigninBtnText}>Sign in</Text>
                    </TouchableOpacity>

                    <View style={styles.textBottom}>
                        <Image source={FrameIcon} style={styles.imgFrame} />
                    </View>
                    <View style={styles.signinBox}>
                        <Image source={AppleLogo} style={styles.logoImg} />
                        <Image source={GoogleLogo} style={styles.logoImg} />
                        <Image source={FBLogo} style={styles.logoImg} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundCol,or: 'lightgray',
    },

    backgroundImage: { 
        flex: 1, 
        justifyContent: 'center', 
        height: 315, 
    },

    container1: {
        // paddingHorizontal: 20,
        width: '100%',
        marginTop: 30,
        height: 50,
        backgroundColor: 'lightgreen',
        justifyContent: 'space-between',
    },

    btnSignip: {
        width: 100,
        height: 40,
    },

    container2: {
        width: '100%',
        height: '70%',
        marginTop: 270,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        gap: 5,
        paddingHorizontal: 16,
    },

    title: {
        width: 200,
        height: 34,
        marginTop: 30,
        // marginLeft: 16,
        // color: '#F7404B',
        fontSize: 24,
        // textAlign: 'center',
        fontWeight: '700',
        fontFamily: 'Oswald',
        // backgroundColor: 'gray',

    },

    subTitle: {
        fontSize: 16,
        fontWeight: '400',
        width: 200,
        height: 22,
        // marginTop: 20,
        // marginLeft: 16,
        // backgroundColor: 'gray',
    },

    inputBox: {
        // width: 370,
        marginTop: 20,
        gap: 20,
        marginBottom: 20,
        paddingBottom: 1,
        // backgroundColor: 'red',
    },

    inputText: {
        width: '100%',
        height: 56,
        color: 'black',
        // marginLeft: 16,
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 16,
        backgroundColor: '#F5F2F3',
    },

    forgotText: {
        height: 20,
        fontWeight: '400',
        fontSize: 14,

    },

    FPasswordBox: {
        alignItems: 'flex-end',
        width: '100%',
        height: 20,
        // marginBottom: 10,
    },

    btnFPassword: {
        color: 'red',
    },

    btnSignin: {
        backgroundColor: '#F2404B',
        paddingHorizontal: 54,
        paddingVertical: 17,
        borderRadius: 12,
        alignItems: 'center',
    },

    SigninBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        alignItems: 'center',
        fontWeight: '500',
    },

    textBottom: {
        marginBottom: 10,
        // height: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        // backgroundColor: 'red',

    },

    imgFrame: {
        width: '100%',
        height: 30,
        marginTop: 20,
        marginHorizontal: 5,
        alignItems: 'center',
        // backgroundColor: 'gray',
    },

    signinBox: {
        // flex: 1,
        flexDirection: "row",
        width: 260,
        height: 70,
        paddingTop: 10,
        // borderColor: '#E7E6E6',
        // borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'lightgray',

    },

    logoImg: {
        width: 80,
        height: 80,
        borderRadius: 25,
    }

})

export default WelcomeLogin;

