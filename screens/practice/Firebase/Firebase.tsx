import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, } from "react-native";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleSignin, statusCodes, GoogleSigninButton } from "@react-native-google-signin/google-signin";


const FirebaseAuth = () => {

    const webClientId = "153333595143-vibset3c2cfad1cfd2ri5a5ua79qbhmp.apps.googleusercontent.com"

    useEffect(() => {
        GoogleSignin.configure({
            // webClientId: webClientId,
            androidClientId:"153333595143-g0r5bnkgiogoqqmo0g1g3mstskbrnonu.apps.googleusercontent.com",
        });
    }, [])

    //Function for google signin---------------->
    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // const { idToken } = userInfo;
            // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // await auth().signInWithCredential(googleCredential);

            console.log('User Login')
            console.log("userinfo", userInfo);

        } catch (error:any) {
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

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signOut();
            console.log("SignOut Clicked");
            console.log("userinfo", userInfo);
        } catch (error) {
            console.error(error);
        }
    };


    //Function for signin using email and password---------------->
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateAccount = () => {

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    Alert.alert('Already have an account with this email!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert('Enter a valid email!');
                }
                console.error(error);
            });
    }

    return (
        <View style={styles.mainView} >
            <View style={styles.container} >
                <Text style={styles.titleText}>Signin with Google</Text>
                {/* <TouchableOpacity style={styles.button} onPress={googleLogin}>
                    <Text style={styles.btnText}>Google Signin</Text>
                </TouchableOpacity > */}

                <GoogleSigninButton
                    onPress={googleLogin}
                />

                <TouchableOpacity style={styles.button} onPress={signOut}>
                    <Text style={styles.btnText}>Sign Out</Text>
                </TouchableOpacity >

            </View>

            <View style={styles.container}>
                <Text style={styles.titleText}>SignUp using email</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(txt) => { setEmail(txt); }}
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder="Passsword"
                    value={password}
                    onChangeText={(txt) => { setPassword(txt) }}
                    style={styles.txtInput}
                />

                <TouchableOpacity onPress={() => { handleCreateAccount(); }}
                    style={styles.button}
                >
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        height: '100%',
        padding: 20,
        // backgroundColor: 'gray'
    },

    container: {
        alignItems: 'center',
        gap: 10,
        marginTop: 30,
        width: 300,
        padding: 15,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 10,
    },

    titleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: 'green',
        width: '100%',
        marginBottom: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        height: 45,
        width: 220,
        borderRadius: 30
    },

    btnText: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        fontSize: 20,
    },

    txtInput: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 30,
        width: '100%',
        paddingLeft: 20
    },
});

export default FirebaseAuth;


// async function onGoogleButtonPress() {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }

// function GoogleSignIn() {

//     return (
//       <Button
//         title="Google Sign-In"
//         onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//       />
//     );
//   }