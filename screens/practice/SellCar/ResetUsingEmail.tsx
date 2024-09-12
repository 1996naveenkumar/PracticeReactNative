import React, { Component } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Yup from 'yup';
import { Formik } from 'formik';
import stylesConstant from './StyleConstant/StylesConstant';


const ValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        // .email("Please enter valid email")
        .matches(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, "name@example.com")
        .required('Email address is required'),
})


interface Props {
    initialValue: { email: string}
}

class SellCarResetUsingEmail extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            initialValue: { email: '' }
        }

    }

    navGoBack = () => this.props.navigation.goBack();
    navSentEmail = () => this.props.navigation.navigate('SellCarSentEmail');

    render() {
        return (
            <SafeAreaView style={{ flex: 1 , backgroundColor: '#FFFFFF'}}>
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
                            <Text style={styles.description}>Enter your email, we will send you the confirmation code</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Formik
                            validationSchema={ValidationSchema}
                            initialValues={this.state.initialValue}
                            onSubmit={this.navSentEmail}
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
                                    <TextInput
                                        placeholder='Email'
                                        placeholderTextColor='gray'
                                        style={styles.txtBox}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType='email-address'
                                    />


                                    <View style={{ zIndex: 1, bottom: 47, right: 162 }}>
                                        <Ionicons name="mail-outline" size={20} color="gray" />
                                    </View>

                                    {errors.email &&
                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                    }


                                    <TouchableOpacity
                                        style={stylesConstant.navBottomBlueBtn }
                                        onPress={() => handleSubmit}
                                        disabled={!isValid}

                                    >
                                        <Text style={stylesConstant.navBlueBtnTxt}>Continue</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </Formik>
                    </View>

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

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 12,
    },

    txtBox: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        borderColor: '#E5E4E2',
        borderWidth: 1,
        paddingLeft: 45,
        fontWeight: '500',
        color: 'black'
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

export default SellCarResetUsingEmail;








