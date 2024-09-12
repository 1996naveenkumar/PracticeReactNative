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
    phone: Yup
        .string()
        .min(10, ({ min }) => `Phone must be at least ${min} characters`)
        // .matches(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Enter a correct phone number")
        .required('Phone number is required'),
})

interface Props {
    initialValue: { email: string, phone: number }
}

class SellCarResetUsingPhone extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            initialValue: { email: '', phone: 9878998778 }

        }

    }

    navGoBack = () => this.props.navigation.goBack();
    navVerifyOTP = () => this.props.navigation.navigate('SellCarVerifyNumber');

    render() {
        return (
            <SafeAreaView style={{ flex: 1,  backgroundColor: '#FFFFFF' }}>
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
                            <Text style={styles.title}>Reset phone</Text>
                            <Text style={styles.description}>Enter your phone number, we will send you the confirmation code</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={{ flexDirection: 'row', width: 30, height: 20 }}>
                            {/* <Image source={require('')} /> */}
                            <TouchableOpacity style={styles.downBtn}>
                                <Entypo name="chevron-small-down" size={20} color="gray" />
                            </TouchableOpacity>
                        </View>

                        <Formik
                            validationSchema={ValidationSchema}
                            initialValues={this.state.initialValue}
                            onSubmit={this.navVerifyOTP}
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
                                        placeholder='Phone number'
                                        placeholderTextColor='gray'
                                        style={styles.txtBox}
                                        keyboardType='numeric'
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone.toString()}
                                    />

                                    {errors.phone &&
                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
                                    }

                                    <TouchableOpacity
                                        style={stylesConstant.navBottomBlueBtn}
                                        onPress={() => handleSubmit()}
                                        disabled={!isValid}
                                    >
                                        <Text style={stylesConstant.navBlueBtnTxt}>Send code number</Text>
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
        // marginBottom: 30,
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
        paddingLeft: 80,
        fontWeight: '500',
        color: 'black'
    },
       
    downBtn: { zIndex: 1, top: 47, right: 130 },

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

export default SellCarResetUsingPhone;








