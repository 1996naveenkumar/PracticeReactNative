import React, { Component } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import stylesConstants from './StyleConstant/StylesConstant';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';

const slides = [
    {
        key: 1,
        // image: require('./assets/findCar.png'),
        title: 'Find Your Dream Car',
        text: `Find the car of your dreams from the world's largest car market`,
    },
    {
        key: 2,
        // image: require('./assets/sellCar.png'),
        title: 'Sell Your Car',
        text: 'Post your ad to interested buyers around the world',
    },
];


class SlideScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navLogin = () => this.props.navigation.replace('SellCarCreateNewPassword');

    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <TouchableOpacity style={styles.skipBtn} onPress={this.navLogin}>
                    <Text style={styles.skipBtnTxt}>Skip</Text>
                </TouchableOpacity>
                {/* <Image source={item.image} style={styles.img} /> */}
                <LottieView
                    source={require('./assets/3dCarImg.json')}
                    autoPlay
                    style={{ width: 400, height: 300, alignItems: 'center', justifyContent: 'center' }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.text}</Text>
                </View>
            </View>
        );
    }

    _renderNextButton = () => {
        return (
            <View style={stylesConstants.navBottomBlueBtn}>
                <Text style={stylesConstants.navBlueBtnTxt}>Next</Text>
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={stylesConstants.navBottomBlueBtn}>
                <Text style={stylesConstants.navBlueBtnTxt}>Get Started</Text>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                <View style={{ zIndex: 1, position: 'absolute', top: 95, backgroundColor: '#000000', width: 400, height: 200, alignSelf: 'center' }}></View>
                <View style={{ flex: 1 }}>
                    <AppIntroSlider
                        data={slides}
                        bottomButton
                        renderItem={this._renderItem}
                        renderNextButton={this._renderNextButton}
                        renderDoneButton={this._renderDoneButton}
                        dotStyle={[styles.slideDot, { backgroundColor: 'lightgray' }]}
                        activeDotStyle={[styles.slideDot, { backgroundColor: '#2f74fa' }]}
                        onDone={this.navLogin}
                    />

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    slide: {
        alignItems: 'center',
        paddingTop: 70,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },

    skipBtn: { alignSelf: 'flex-end', paddingRight: 40, marginBottom: 80 },

    skipBtnTxt: { fontWeight: '800', color: 'white', fontSize: 15 },

    img: {
        width: 340,
        height: 340,
    },

    textContainer: {
        marginTop: 80,
        gap: 5,
        height: 100,
        width: 230,
        // backgroundColor: 'blue',
    },

    title: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        textAlign: 'center'
    },

    description: {
        color: '#92a2bb',
        textAlign: 'center',
    },

    slideDot: {
        width: 30,
        height: 4,
        marginBottom: 230,
    },

});

export default SlideScreen;
