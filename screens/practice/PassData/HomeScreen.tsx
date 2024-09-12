import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MessageScreen from './MessageScreen';
import { Linking } from 'react-native';

const rotateImage = require('./../assets/meetme.png')

// DeepLinking-------------------
const HomeScreen = () => {

  let imgURL = 'https://source.unsplash.com/random/';

  console.log("HomeScreen");

  const [message, setMessage] = useState('');
  const navigation = useNavigation<any>();
  const goToMessageScreen = () => {
    navigation.navigate('Message', { name: message });
  };

  const handleLinks = (url: string | null) => {
    if (url?.toString()?.includes("id")) {
      let id = url?.toString()?.split("id=")?.[
        url?.toString()?.split("id=")?.length - 1
      ];
      console.log("handleLinks", id);
    }
  }

  const handleDynamicLink = () => {
    Linking.addEventListener("url", (url) => {
      console.log("URL");
      handleLinks(url.url);
    });
    console.log("DynamicLink");
  }

  const navigateHandler = async (url: any) => {
    if (url) {
      //  const { navigate } = navigation;
      //  const route = url.replace(/.*?:\/\//g, '');
      //  const id = route.match(/\/([^\/]+)\/?$/)[1];
      console.log("URL--------------->", url)
      // Alert.alert("Working")
    }
  }

  const getInitialURL = () => {
    Linking.getInitialURL().then((url) => {
      navigateHandler(url);
    });
    console.log("InitialURL");
  }

  useEffect(() => {
    getInitialURL();
    handleDynamicLink();
    console.log("useEffect");
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Home Screen</Text>
      <TextInput
        placeholder="Enter your message here"
        placeholderTextColor={'gray'}
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => goToMessageScreen} style={styles.btn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Message', { id: '123' })} style={styles.btn}>
        <Text style={styles.btnText}>Go to message</Text>
      </TouchableOpacity>
      <View style={[
        styles.img,
        {
          transform: [{ rotate: '30deg' }],
        },
      ]}>
      <Image source={rotateImage} style={{width: 200, height: 200}}/>
    </View>
    </View >
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 50,
  },
  input: {
    textAlign: 'center',
    width: '75%',
    padding: 10,
    marginTop: 20,
    color: '#000',
    // backgroundColor: 'black'
  },

  btn: {
    width: 200,
    height: 40,
    backgroundColor: 'green',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 8,
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  img: {
    marginTop: 50,
    width: 200,
    height: 200,
    // borderColor: 'red',
    // borderWidth: 2,
  }
});

export default HomeScreen; 