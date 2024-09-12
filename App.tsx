
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/practice/PassData/HomeScreen';
import MessageScreen from './screens/practice/PassData/MessageScreen';
import { FlatList, Linking } from 'react-native';
// import  FirebaseAuth  from "./Firebase";
// import MainComponent from './store/Redux';
import { Provider } from 'react-redux';
import { store } from './screens/store/store';
import TestRedux from './screens/practice/ReduxScreen/TestReduxData';
import DrawerLayout from './screens/practice/Drawer/DrawerLayoutAndroid';
// import { Store } from 'redux';
import Permissions from './screens/practice/Permissions & useRef/Permission';
import LocalNotifi from './screens/practice/Notifications_DatePicker/LocalNotifi';
import Person from './screens/practice/ClassComponent/Class';
import ShareData from './screens/practice/ClassComponent/ShareData';
import VideoCall from './screens/practice/VideoCall/VideoCall';
import FlatListAPI from './screens/practice/API&Flatlist/API&Flatlist';
import WelcomeLogin from './screens/practice/WelcomeScreenUI/WelcomeScreen';
import FoodScreen from "./screens/practice/WelcomeScreenUI/FoodUI"
import Hexagon from './screens/practice/Hexagon';
import ToDo from './screens/practice/ClassComponent/Todo';
import ChatSignUp from './screens/practice/ChatApp/ChatSignup';
import ChatOTP from './screens/practice/ChatApp/ChatOTP';
import ChatCreateAccount from './screens/practice/ChatApp/ChatCreateAcc';
import Naveen from './screens/practice/ClassComponent/PracticeClass';
import LoginAPI from './screens/practice/ClassComponent/LoginAPI';
import Splash from './screens/practice/SellCar/Splash';
import SlideScreen from './screens/practice/SellCar/GetStarted';
import SellCarLogin from './screens/practice/SellCar/LoginScreen';
import SellCarEmailLogin from './screens/practice/SellCar/EmailLogin';
import SellCarWelcome from './screens/practice/SellCar/Welcome';
import SellCarCreateAcc from './screens/practice/SellCar/CreateAcc';
import SellCarRegSuccess from './screens/practice/SellCar/RegSuccess';
import SellCarForgotPassword from './screens/practice/SellCar/ForgotPassword';
import SellCarSentEmail from './screens/practice/SellCar/SentEmail';
import DeepOrion from './screens/practice/ClassComponent/UI';
import SellCarResetUsingEmail from './screens/practice/SellCar/ResetUsingEmail';
import SellCarResetUsingPhone from './screens/practice/SellCar/ResetUsingPhone';
import SellCarVerifyNumber from './screens/practice/SellCar/VerifcationCode';
import SellCarCreateNewPassword from './screens/practice/SellCar/CreateNewPass';
import SellCarPasswordChanged from './screens/practice/SellCar/PasswordChanged';


const Stack = createNativeStackNavigator();

const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator 
      screenOptions={{ 
        // headerStyle: { 
        //   backgroundColor: 'green', 
        // }, 
        // headerTintColor: '#fff', 
        headerShown: false,
      }}
        initialRouteName="Splash"
      >
        {/* <Stack.Screen name="Person" component={Person} />  */}
        <Stack.Screen name="ShareData" component={ShareData} /> 
        <Stack.Screen name="VideoCall" component={VideoCall} /> 
        <Stack.Screen name="FlatListAPI" component={FlatListAPI} /> 
        <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} /> 
        <Stack.Screen name="FoodScreen" component={FoodScreen} /> 
        <Stack.Screen name="Hexagon" component={Hexagon} /> 
        <Stack.Screen name="ToDo" component={ToDo} /> 
        <Stack.Screen name="ChatSignUp" component={ChatSignUp} /> 
        <Stack.Screen name="ChatOTP" component={ChatOTP} /> 
        <Stack.Screen name="ChatCreateAccount" component={ChatCreateAccount} /> 
        <Stack.Screen name="Naveen" component={Naveen} /> 
        <Stack.Screen name="LoginAPI" component={LoginAPI} />
        <Stack.Screen name="DeepOrion" component={DeepOrion} />


        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="SlideScreen" component={SlideScreen} /> 
        <Stack.Screen name="SellCarLogin" component={SellCarLogin} /> 
        <Stack.Screen name="SellCarEmailLogin" component={SellCarEmailLogin} /> 
        <Stack.Screen name="SellCarWelcome" component={SellCarWelcome} /> 
        <Stack.Screen name="SellCarCreateAcc" component={SellCarCreateAcc} /> 
        <Stack.Screen name="SellCarRegSuccess" component={SellCarRegSuccess} /> 
        <Stack.Screen name="SellCarForgotPassword" component={SellCarForgotPassword} /> 
        <Stack.Screen name="SellCarResetUsingEmail" component={SellCarResetUsingEmail} /> 
        <Stack.Screen name="SellCarResetUsingPhone" component={SellCarResetUsingPhone} /> 
        <Stack.Screen name="SellCarVerifyNumber" component={SellCarVerifyNumber} /> 
        <Stack.Screen name="SellCarSentEmail" component={SellCarSentEmail} /> 
        <Stack.Screen name="SellCarCreateNewPassword" component={SellCarCreateNewPassword} /> 
        <Stack.Screen name="SellCarPasswordChanged" component={SellCarPasswordChanged} /> 
      </Stack.Navigator>
    </NavigationContainer>

    // <Provider store={store}>
    //   <TestRedux/>
    // </Provider>
    // <DrawerLayout/>
    // <FirebaseAuth/>
    // <Permissions/>
    // <LocalNotifi/>
    // <Person/>
    // <shareData/>
    
  );
}

export default App;
