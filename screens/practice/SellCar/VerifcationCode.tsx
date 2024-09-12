import React, { Component, RefObject } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Yup from 'yup';
import { Formik } from 'formik';
import stylesConstant from './StyleConstant/StylesConstant';



const ValidationSchema = Yup.object().shape({
    otp: Yup
        .string()
        .min(1, ({ min }) => `All the field must be filled.`)
        .required('OTP is required. formik is not working'),
})

interface Props {
    otpFocus: boolean
    firstRef: RefObject<TextInput>
    secondRef: RefObject<TextInput>
    thirdRef: RefObject<TextInput>
    fourthRef: RefObject<TextInput>
    initialValue: { otp: string }
}

class SellCarVerifyNumber extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            otpFocus: false,
            firstRef: React.createRef<TextInput>(),
            secondRef: React.createRef<TextInput>(),
            thirdRef: React.createRef<TextInput>(),
            fourthRef: React.createRef<TextInput>(),
            initialValue: { otp: '' }
        }
    }

    navGoBack = () => this.props.navigation.goBack();
    navCreateNewPass = () => this.props.navigation.navigate("SellCarCreateNewPassword");

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={'#FFFFFF'}
                />
                <View style={styles.mainContainer}>
                    <View style={{ marginLeft: 25 }}>
                        <TouchableOpacity onPress={this.navGoBack}>
                            <Entypo name="chevron-left" size={28} color="black" />
                        </TouchableOpacity>

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Reset Password</Text>
                            <Text style={styles.description}>Enter your phone number, we will send you the confirmation code</Text>
                        </View>
                    </View>

                    <Formik
                        validationSchema={ValidationSchema}
                        initialValues={this.state.initialValue}
                        onSubmit={this.navCreateNewPass}
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
                                <View style={styles.OTPboxContainer}>
                                    <TextInput
                                        style={styles.OTPText}
                                        keyboardType='numeric'
                                        onBlur={handleBlur('otp')}
                                        value={values.otp}

                                        maxLength={1}
                                        ref={this.state.firstRef}
                                        textAlign='center'
                                        autoFocus={true}
                                        showSoftInputOnFocus={true}
                                        onChangeText={(value: string) => {
                                            { handleChange('otp') }
                                            if (!value) {
                                                this.state.firstRef.current?.focus();

                                                return;
                                            };
                                            this.state.secondRef.current?.focus();
                                        }}
                                    />
                                    <TextInput
                                        style={styles.OTPText}
                                        keyboardType='numeric'
                                        // onBlur={handleBlur('otp')}
                                        value={values.otp}

                                        maxLength={1}
                                        ref={this.state.secondRef}
                                        textAlign='center'
                                        showSoftInputOnFocus={true}
                                        onChangeText={(value: string) => {
                                            handleChange('otp')
                                            if (!value) {
                                                this.state.firstRef.current?.focus();
                                                return;
                                            };
                                            this.state.thirdRef.current?.focus();
                                        }}
                                    />
                                    <TextInput
                                        style={styles.OTPText}
                                        keyboardType='numeric'
                                        // onBlur={handleBlur('otp')}
                                        // value={values.otp}

                                        maxLength={1}
                                        ref={this.state.thirdRef}
                                        textAlign='center'
                                        showSoftInputOnFocus={true}
                                        onChangeText={(value: string) => {
                                            if (!value) {
                                                this.state.secondRef.current?.focus();
                                                // handleChange('otp')
                                                return;

                                            };
                                            console.log("Third: ", value)
                                            this.state.fourthRef.current?.focus();
                                        }}
                                    />
                                    <TextInput
                                        style={styles.OTPText}
                                        keyboardType='numeric'
                                        // onBlur={handleBlur('otp')}
                                        // value={values.otp}

                                        maxLength={1}
                                        ref={this.state.fourthRef}
                                        textAlign='center'
                                        showSoftInputOnFocus={true}
                                        onChangeText={(value: string) => {
                                            if (!value) {
                                                this.state.thirdRef.current?.focus();
                                                // handleChange('otp')
                                                return;
                                            };
                                        }}
                                    />
                                </View>

                                <Text style={styles.resendText}>Resend code in <Text style={{ color: '#2f74fa' }}>05:45</Text></Text>
                                <View style={styles.buttonContainer}>

                                    {errors.otp &&
                                        <Text style={{ textAlign: 'center', fontSize: 10, color: 'red' }}>{errors.otp}</Text>
                                    }

                                    <TouchableOpacity
                                        style={stylesConstant.navBottomBlueBtn}
                                        onPress={() => handleSubmit()}
                                        disabled={!isValid}
                                    >
                                        <Text style={styles.btnTxt}>Verify</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 45,
    },

    textContainer: {
        marginTop: '8%',
        marginBottom: 30,
        gap: 13,
        width: '70%',
    },

    title: {
        fontSize: 22,
        fontWeight: '800',
        color: 'black',
        lineHeight: 25,
    },

    description: {
        color: 'gray',
        fontSize: 13,
        lineHeight: 15,
    },

    OTPboxContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        marginBottom: 10,
    },

    OTPText: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderColor: '#E5E4E2',
        borderWidth: 1,
        fontWeight: '500',
        color: 'black',
    },

    buttonContainer: {
        flex: 1,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: 10,
        // backgroundColor: 'lightblue',
    },

    resendText: {
        textAlign: 'center',
        color: 'black',
    },

    btnTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 13,
    },

    button: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50,
    },

});

export default SellCarVerifyNumber;








