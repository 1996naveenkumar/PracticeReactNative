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
    showEye1: boolean
    showEye2: boolean
}

class SellCarCreateNewPassword extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showEye1: true,
            showEye2: true,
        };
    }



    navGoBack = () => this.props.navigation.goBack();
    navSignUp = () => this.props.navigation.navigate('SellCarCreateAcc');
    navWelcome = () => this.props.navigation.navigate('SellCarWelcome');
    navForgotPassword = () => this.props.navigation.navigate('SellCarForgotPassword');


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
                            <Text style={styles.title}>Create New Password</Text>
                            <Text style={styles.description}>Please enter the new password</Text>
                        </View>
                    </View>

                    <View style={styles.main}>

                        <View style={{ flex: 1, height: '100%', width: '90%', gap: 20, }}>
                            <View style={{ gap: 5 }}>
                                <Text style={{ color: 'gray' }}>New password</Text>
                                <View>
                                    <View style={{ zIndex: 1, position: 'absolute', top: 16, left: 14 }}>
                                        <Feather name="key" size={18} color="gray" />
                                    </View>
                                    <TextInput
                                        style={styles.txtInput}
                                        placeholder='Password'
                                        placeholderTextColor='gray'
                                        secureTextEntry={this.state.showEye1}
                                    />
                                    <TouchableOpacity style={styles.eyeBtn} onPress={() => { this.setState({ showEye1: !this.state.showEye1 }) }}>
                                        {
                                            this.state.showEye1 ? <Feather name="eye-off" size={18} color="gray" /> : <Feather name="eye" size={18} color="gray" />
                                        }
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ gap: 5 }}>
                                <Text style={{ color: 'gray' }}>Confirm password</Text>
                                <View>
                                    <View style={{ zIndex: 1, position: 'absolute', top: 16, left: 14 }}>
                                        <Feather name="key" size={18} color="gray" />
                                    </View>
                                    <TextInput
                                        style={styles.txtInput}
                                        placeholder='Password'
                                        placeholderTextColor='gray'
                                        secureTextEntry={this.state.showEye2}
                                    />

                                    <TouchableOpacity style={styles.eyeBtn} onPress={() => { this.setState({ showEye2: !this.state.showEye2 }) }}>
                                        {
                                            this.state.showEye2 ? <Feather name="eye-off" size={18} color="gray" /> : <Feather name="eye" size={18} color="gray" />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity
                            style={stylesConstant.navBottomBlueBtn}
                            onPress={this.navWelcome}
                        >
                            <Text style={stylesConstant.navBlueBtnTxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        marginTop: 20,
        // backgroundColor: 'lightgreen',
    },

    textContainer: {
        marginTop: 20,
        marginBottom: 30,
        width: 300,
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
        top: 16,
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

export default SellCarCreateNewPassword;








