import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';


class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('SlideScreen');
    }, 3500);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <View style={styles.main}>
            <LottieView
              source={require('./assets/lottieSellCar.json')}
              autoPlay
              style={{ width: 450, height: 450, alignItems: 'center', justifyContent: 'center' }}
            />
            <Text style={styles.description}>Sell Car</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#2f74fa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    color: '#E8E8E8',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    position: 'absolute',
    bottom: 345,
  },
});









