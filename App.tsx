
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/practice/PassData/HomeScreen';
import MessageScreen from './screens/practice/PassData/MessageScreen';
import { Linking } from 'react-native';
// import  FirebaseAuth  from "./Firebase";
// import MainComponent from './store/Redux';
import { Provider } from 'react-redux';
import { store } from './screens/store/store';
import TestRedux from './screens/practice/ReduxScreen/TestReduxData';
import DrawerLayout from './screens/practice/Drawer/DrawerLayoutAndroid';
// import { Store } from 'redux';
import Permissions from './screens/practice/Permissions&useRef/Permission';
import LocalNotifi from './screens/practice/Notifications & datePicker/LocalNotifi';
import Person from './screens/practice/ClassComponent/Class';
import SplashScreen from 'react-native-splash-screen'


useEffect

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
 
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer >
    //   <Stack.Navigator 
    //   screenOptions={{ 
    //     headerStyle: { 
    //       backgroundColor: 'green', 
    //     }, 
    //     headerTintColor: '#fff', 
    //   }}
    //     initialRouteName="Home"
    //   >
    //     <Stack.Screen name="Home" component={HomeScreen} /> 
    //     <Stack.Screen name="Message" component={MessageScreen} /> 
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <Provider store={store}>
    //   <TestRedux/>
    // </Provider>
    // <DrawerLayout/>
    // <FirebaseAuth/>
    // <Permissions/>
    // <LocalNotifi/>
    <Person/>
    
  );
}

export default App;
