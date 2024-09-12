import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import stylesConstant from './StyleConstant/StylesConstant';


interface Props {
    showEye: boolean
}

class SellCarEmailLogin extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showEye: true
        };
    }

    componentDidMount(): void {
        GoogleSignin.configure({
            // webClientId: webClientId,
            androidClientId: "153333595143-g0r5bnkgiogoqqmo0g1g3mstskbrnonu.apps.googleusercontent.com",
        });
    }

    navGoBack = () => this.props.navigation.goBack();
    navSignUp = () => this.props.navigation.navigate('SellCarCreateAcc');
    navWelcome = () => this.props.navigation.navigate('SellCarWelcome');
    navForgotPassword = () => this.props.navigation.navigate('SellCarForgotPassword');

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


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={'#FFFFFF'}
                />
                <View style={styles.mainContainer}>
                    <View style={{ width: 360, marginLeft: 25 }}>
                        <TouchableOpacity onPress={this.navGoBack} style={{}}>
                            <Entypo name="chevron-left" size={28} color="black" />
                        </TouchableOpacity>

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Hi! Welcome Back</Text>
                            <Text style={styles.description}>Log in your account</Text>
                        </View>
                    </View>

                    <View style={styles.main}>

                        <View style={{ marginBottom: 50, width: '90%', gap: 15 }}>
                            <View style={{ zIndex: 1, position: 'absolute', top: 15, left: 14 }}>
                                <Fontisto name="email" size={18} color="gray" />
                            </View>
                            <TextInput
                                style={styles.txtInput}
                                placeholder='Email'
                                placeholderTextColor='gray'
                            />
                            <View style={{ zIndex: 1, position: 'absolute', top: 82, left: 14 }}>
                                <Feather name="key" size={18} color="gray" />
                            </View>
                            <TextInput
                                style={styles.txtInput}
                                placeholder='Password'
                                placeholderTextColor='gray'
                                secureTextEntry={this.state.showEye}
                            ></TextInput>
                            <TouchableOpacity style={styles.eyeBtn} onPress={() => { this.setState({ showEye: !this.state.showEye }) }}>
                                {
                                    this.state.showEye ? <Feather name="eye-off" size={18} color="gray" /> : <Feather name="eye" size={18} color="gray" />
                                }
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.forgotPassword} onPress={this.navForgotPassword}>
                                <Text style={{ color: '#2f74fa', fontWeight: '500' }}>Forgot Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[stylesConstant.navBlueBtn, { marginTop: 20 }]}
                                onPress={this.navWelcome}
                            >
                                <Text style={stylesConstant.navBlueBtnTxt}>Log In</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', alignItems: 'center', opacity: 0.7 }} >
                            <Image source={require('./assets/lineOr.png')} style={styles.orLine} />
                        </View>

                        <View style={{ marginBottom: 60, marginTop: 12, width: '90%', gap: 5 }}>
                            <TouchableOpacity style={styles.button} onPress={this.googleLogin}>
                                <Image source={require('./assets/google.png')} style={styles.logo} />
                                <Text style={styles.btnTxt}>Continue with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <AntDesign name="apple1" size={17} color="black" />
                                <Text style={styles.btnTxt}>Continue with Apple</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'black', lineHeight: 25 }}>Don't have an account? <Text onPress={this.navSignUp} style={styles.signupBtn}>Sign Up</Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 45,
    },

    textContainer: {
        marginTop: 20,
        marginBottom: 30,
        width: 200,
        gap: 13,
        // backgroundColor: 'blue',
    },

    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    title: {
        fontSize: 22,
        fontWeight: '800',
        color: 'black',
        // textAlign: 'center',
        lineHeight: 25,
    },

    description: {
        color: 'gray',
        // textAlign: 'center',
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

    txtInput: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: 40,
        color: 'black',
    },

    orLine: {
        width: '90%',
        marginBottom: 20,
    },

    btnTxt: {
        color: 'black',
        fontWeight: '800',
        fontSize: 13,
        lineHeight: 50,
    },

    eyeBtn: {
        zIndex: 1,
        position: 'absolute',
        top: 82,
        left: 335
    },

    forgotPassword: {
        alignItems: 'flex-end',
        // backgroundColor: 'blue',
    },

    signupBtn: {
        color: '#2f74fa',
        fontWeight: '700'
    },

});

export default SellCarEmailLogin;








