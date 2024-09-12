import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AntDesign from 'react-native-vector-icons/AntDesign';
import stylesConstant from './StyleConstant/StylesConstant';

const windowWidth = Dimensions.get('window').width;


class SellCarLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(): void {
        GoogleSignin.configure({
            // webClientId: webClientId,
            androidClientId: "153333595143-g0r5bnkgiogoqqmo0g1g3mstskbrnonu.apps.googleusercontent.com",
        });
    }

    navSignUp = () => this.props.navigation.navigate('SellCarCreateAcc');
    navEmailLogin = () => this.props.navigation.navigate('SellCarEmailLogin');

    //Function for google signin---------------->
    googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // const { idToken } = userInfo;
            // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // await auth().signInWithCredential(googleCredential);

            console.log('User Login')
            console.log("userinfo", userInfo);

        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error)
            } else {
            }
            console.log("Error", error);
        }
    };

    signOut = async () => {
        try {
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signOut();
            console.log("SignOut Clicked");
            console.log("userinfo", userInfo);
        } catch (error) {
            console.error(error);
        }
    };


    render() {
        return (
            <SafeAreaView style={{ flex: 1,  backgroundColor: '#FFFFFF' }}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={'#FFFFFF'}
                // translucent={true}
                />
                <View style={styles.main}>
                    <ImageBackground source={require('./assets/nexon.jpg')} style={styles.background}>

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Let's Get Started</Text>
                            <Text style={styles.description}>Sign up or log in to find out the best car for you</Text>
                        </View>

                        <View style={{ marginBottom: 50, width: '90%' }}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#2f74fa' }]} onPress={this.navEmailLogin}>
                                <Text style={styles.btnTxt1}>Continue with email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={this.googleLogin}>
                                <Image source={require('./assets/google.png')} style={styles.logo} />
                                <Text style={styles.btnTxt}>Continue with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <AntDesign name="apple1" size={17} color="black" />
                                <Text style={styles.btnTxt}>Continue with Apple</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: 'gray', lineHeight: 22 }}>Don't have an account?  <Text onPress={this.navSignUp} style={{ color: '#2f74fa', fontWeight: '700' }}>Sign Up</Text></Text>

                    </ImageBackground>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 0.07 * windowWidth,
    },

    background: {
        width: windowWidth,
        height: 0.5 * windowWidth,
        marginTop: 0.19 * windowWidth,
        alignItems: 'center'
        // marginHorizontal: 0.07 * windowWidth,
    },

    textContainer: {
        marginTop: 0.65 * windowWidth,
        gap: 15,
        height: 100,
        width: 200,
        alignItems: 'center',
        // backgroundColor: 'blue',
    },

    title: {
        fontSize: 22,
        fontWeight: '800',
        color: 'black',
        textAlign: 'center',
        lineHeight: 25,
    },

    description: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 15,
    },

    logo: {
        width: 18,
        height: 18,
    },

    button: {
        flexDirection: 'row',
        width: "100%",
        height: 50,
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 8,
    },

    btnTxt1: {
        color: 'white',
        fontWeight: '700',
        fontSize: 13,
    },

    btnTxt: {
        color: 'black',
        fontWeight: '800',
        fontSize: 13,
    }
});

export default SellCarLogin;








