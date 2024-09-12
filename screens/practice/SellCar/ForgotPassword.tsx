import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylesConstant from './StyleConstant/StylesConstant';

const windowWidth = Dimensions.get('window').width;


interface Props {
    emailIconColor: boolean
    phoneIconColor: boolean
    emailBorder: boolean
    phoneBorder: boolean
    selectedScreen: null
}

class SellCarForgotPassword extends Component<{}, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            emailIconColor: false,
            phoneIconColor: false,
            emailBorder: false,
            phoneBorder: false,
            selectedScreen: null,
        };
    }


    navGoBack = () => this.props.navigation.goBack();
    navSignUp = () => this.props.navigation.navigate('SellCarCreateAcc');
    navWelcome = () => this.props.navigation.navigate('SellCarWelcome');

    selectScreen = (screen) => {
        this.setState({ selectedScreen: screen })
    }

    changeEmailBtn = () => {
        this.setState({ emailIconColor: true, phoneIconColor: false })
        this.setState({ emailBorder: true, phoneBorder: false })
        this.selectScreen('SellCarResetEmailOTP')
    }

    changePhoneBtn = () => {
        this.setState({ emailIconColor: false, phoneIconColor: true })
        this.setState({ emailBorder: false, phoneBorder: true })
        this.selectScreen('SellCarSentEmail')
    }

    continueNavigation = () => {
        const selectedScreen = this.state

        if (this.state.phoneIconColor) {
            this.props.navigation.navigate("SellCarResetUsingPhone");
        }
        else if (this.state.emailIconColor) {
            this.props.navigation.navigate("SellCarResetUsingEmail");
        }
        // if (selectedScreen) {

        // } else {
        //     Alert.alert('Please select a screen first')
        // }

    }


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
                            <Text style={styles.title}>Forgot Password</Text>
                            <Text style={styles.description}>Select which contact details should we use to reset your password</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={[styles.btnBox, this.state.emailBorder ? { borderColor: 'blue' } : null]}
                            onPress={this.changeEmailBtn}
                        >
                            {this.state.emailIconColor
                                ? <Ionicons name="mail-outline" size={20} color="blue" />
                                : <Ionicons name="mail-outline" size={20} color="gray" />
                            }

                            <View style={styles.btnTxtBox} >
                                <Text style={{ color: 'black', fontWeight: '800' }}>Email</Text>
                                <Text style={styles.description}>Enter your email, we will send you confirmation code
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnBox, this.state.phoneBorder ? { borderColor: 'blue' } : null]} onPress={this.changePhoneBtn}>

                            {this.state.phoneIconColor
                                ? <Ionicons name="call-outline" size={20} color="blue" />
                                : <Ionicons name="call-outline" size={20} color="gray" />
                            }

                            <View style={styles.btnTxtBox} >
                                <Text style={{ color: 'black', fontWeight: '800' }}>Phone</Text>
                                <Text style={styles.description}>Enter your phone number, we will send you confirmation code</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        style={stylesConstant.navBottomBlueBtn}
                        onPress={this.continueNavigation}

                    >
                        {/* {this.state.emailBorder ? this.props.navigation.navigate('SellCarSentEmail'): null} */}
                        <Text style={stylesConstant.navBlueBtnTxt}>Continue</Text>
                    </TouchableOpacity>

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
        // backgroundColor: 'blue',
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 20,
        // backgroundColor: 'red'
    },

    btnBox: {
        flexDirection: 'row',
        width: "100%",
        height: 100,
        borderRadius: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginTop: 10,
        padding: 15,
        // backgroundColor: 'red'
    },

    btnTxtBox: { marginLeft: 15, width: 220, gap: 10 },

    title: {
        fontSize: 0.05 * windowWidth,
        fontWeight: '800',
        color: 'black',
        // lineHeight: 25,
    },

    description: {
        color: 'gray',
        fontSize: 13,
        lineHeight: 15,
    },

});

export default SellCarForgotPassword;








