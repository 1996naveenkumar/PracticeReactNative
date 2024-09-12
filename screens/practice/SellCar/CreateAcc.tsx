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
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Yup from 'yup';
import { Formik } from 'formik';
import stylesConstant from './StyleConstant/StylesConstant';

const ValidationSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, ({ min }) => `Name: must be at least ${min} characters`)
        .required('Name is Required'),
    email: Yup
        .string()
        .email("Email: Please enter valid email")
        .matches(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, "name@example.com")
        .required('Email address is Required'),
    password: Yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password: Atleast one uppercase, one lowercase character and one number. Min 8 characters")
        .required('Password is required'),
})

interface Props {
    showEye: boolean
    initialValue: { name: string, email: string, password: string }
}

class SellCarCreateAcc extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showEye: true,
            initialValue: { name: '', email: '', password: '' }

        };
    }

    componentDidMount(): void {
        GoogleSignin.configure({
            // webClientId: webClientId,
            androidClientId: "153333595143-g0r5bnkgiogoqqmo0g1g3mstskbrnonu.apps.googleusercontent.com",
        });
    }

    navGoBack = () => this.props.navigation.goBack();
    navLogin = () => this.props.navigation.navigate('SellCarLogin');
    navRegSuccess = () => this.props.navigation.navigate('SellCarRegSuccess')


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
                // translucent={true}
                />
                <View style={styles.mainContainer}>
                    <View style={{ marginLeft: 25 }}>
                        <TouchableOpacity onPress={this.navGoBack}>
                            <Entypo name="chevron-left" size={28} color="black" />
                        </TouchableOpacity>

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.description}>Sign up and get started</Text>
                        </View>
                    </View>

                    <View style={styles.main}>

                        <View style={{ marginBottom: 50, width: '90%', gap: 15 }}>

                            <Formik
                                validationSchema={ValidationSchema}
                                initialValues={this.state.initialValue}
                                onSubmit={this.navRegSuccess}
                            >
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    values,
                                    errors,
                                    isValid,
                                }) => (
                                    <>
                                        <View style={{ zIndex: 1, position: 'absolute', top: 15, left: 14 }}>
                                            <Ionicons name="person-outline" size={18} color="gray" />
                                        </View>
                                        <TextInput
                                            placeholder='Name'
                                            placeholderTextColor='gray'
                                            style={styles.txtInput}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                            key={1}
                                            testID='name'
                                        />

                                        <View style={{ zIndex: 1, position: 'absolute', top: 82, left: 14 }}>
                                            <Fontisto name="email" size={18} color="gray" />
                                        </View>
                                        <TextInput
                                            placeholder='Email'
                                            placeholderTextColor='gray'
                                            style={styles.txtInput}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            keyboardType="email-address"
                                            key={2}
                                            testID='email'
                                        />


                                        <View style={{ zIndex: 1, position: 'absolute', top: 145, left: 14 }}>
                                            <Feather name="key" size={18} color="gray" />
                                        </View>

                                        <TextInput
                                            placeholder='Password'
                                            placeholderTextColor='gray'
                                            style={styles.txtInput}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureTextEntry={this.state.showEye}
                                            key={3}
                                            testID='password'
                                        />

                                        {errors.name &&
                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                                        }
                                        {errors.email &&
                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                        }
                                        {errors.password &&
                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                        }

                                        <TouchableOpacity style={styles.eyeBtn} onPress={() => { this.setState({ showEye: !this.state.showEye }) }}>
                                            {
                                                this.state.showEye ? <Feather name="eye-off" size={18} color="gray" /> : <Feather name="eye" size={18} color="gray" />
                                            }
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={ stylesConstant.navBlueBtn }
                                            onPress={()=>handleSubmit()}
                                            disabled={!isValid}
                                        >
                                            <Text style={stylesConstant.navBlueBtnTxt}>Sign Up</Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </Formik>

                        </View>

                        <View style={{ width: '100%', alignItems: 'center', opacity: 0.7 }} >
                            <Image source={require('./assets/lineOr.png')} style={styles.orLine} />
                        </View>

                        <View style={{ marginBottom: 60, marginTop: 15, width: '90%', gap: 5 }}>
                            <TouchableOpacity style={styles.button} onPress={this.googleLogin}>
                                <Image source={require('./assets/google.png')} style={styles.logo} />
                                <Text style={styles.btnTxt}>Continue with Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <AntDesign name="apple1" size={17} color="black" />
                                <Text style={styles.btnTxt}>Continue with Apple</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'gray', lineHeight: 25 }}>Already have an account? <Text onPress={this.navLogin} style={styles.signupBtn}>Login</Text></Text>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 45,
    },

    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 15,
    },

    textContainer: {
        marginTop: 20,
        marginBottom: 30,
        gap: 13,
        // backgroundColor: 'blue',
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
        color: 'black'
    },

    orLine: {
        width: '90%',
        marginBottom: 20,
        opacity: 0.8,
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
        lineHeight: 48,
    },

    eyeBtn: {
        zIndex: 1,
        position: 'absolute',
        top: 145,
        left: 335,
        marginBottom: 20
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

export default SellCarCreateAcc;








