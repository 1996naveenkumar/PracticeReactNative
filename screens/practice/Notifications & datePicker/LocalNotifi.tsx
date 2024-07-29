import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, AppRegistry, PermissionsAndroid, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import notifee, { AndroidBadgeIconType, AndroidImportance, AndroidColor, AndroidStyle, EventType, TimestampTrigger, TriggerType, Notification } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { PushNotification } from 'react-native';


const LocalNotifi = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //       PushNotification.localNotification({
    //         message: remoteMessage.notification?.body,
    //         title: remoteMessage.notification?.title,
    //         bigPictureUrl: remoteMessage.notification?.android?.imageUrl,
    //         smallIcon: remoteMessage.notification?.android?.imageUrl,
    //       });
    //     });
    //     return unsubscribe;
    //   }, []);

    //   return null;


    // useEffect(() => {
    //     // getAccessToken(); // Console FCM Token
    // }, []);


    // To get FCM Token to enter in firebase messsaging
    // const getDeviceToken = async () => {
    //     const token = await messaging().getToken();
    //     console.log(token)
    // };


    // messaging.setBackgroundMessageHandler(function(payload) {
    //     console.log('[firebase-messaging-sw.js] Received background message ', payload);
    //     // Customize notification here
    //     const notificationTitle = 'Background Message Title';
    //     const notificationOptions = {
    //         body: 'Background Message body.',
    //         icon: '../assets/meetme.png'
    //     };

    //     return self.registration.showNotification(notificationTitle,
    //         notificationOptions);
    // });


    // useEffect(() => {
    //     return notifee.onForegroundEvent(({ type, detail }) => {
    //         switch (type) {
    //             case EventType.DISMISSED:
    //                 console.log('User dismissed notification', detail.notification);
    //                 break;
    //             case EventType.PRESS:
    //                 console.log('User pressed notification', detail.notification);
    //                 break;
    //         }
    //     });
    // }, []);

    // useEffect(() => {
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //     });
    //     const showAlert = (title, message) => {
    //     Alert.alert(
    //       title,
    //       message,
    //       [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    //       { cancelable: false },
    //     );
    //   };

    //     // showAlert("hello", 'text message');
    //     return unsubscribe;
    //   }, []);


    async function onDisplayNotification() {

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            badge: false,
            importance: AndroidImportance.HIGH

        });

        // Sometime later...
        await notifee.displayNotification({
            id: '123',
            title: 'Updated Notification Title',
            body: 'Updated main body content of the notification',
            // subtitle: 'Messages',

            android: {
                channelId,

                // badgeIconType: AndroidBadgeIconType.LARGE,
                importance: AndroidImportance.HIGH, // Importance levels for notification---------------
                largeIcon: require('../assets/meetme.png'),
                // smallIcon: require('../assets/meetme.png'),

                showTimestamp: true, // Visible time for notification-----------------
                timestamp: Date.now() - 30000, // 5 minutes

                // showChronometer: true, // Visible timer for notification-------------------
                // chronometerDirection: 'down',
                // timestamp: Date.now() + 30000, // 5 minutes

                // Types of style------------------------
                // style: { type: AndroidStyle.BIGPICTURE, picture: 'https://img.freepik.com/free-photo/digital-lavender-natural-landscape_23-2150538352.jpg' },
                // style: { type: AndroidStyle.BIGTEXT, text: 'In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available' },
                // style: {
                //     type: AndroidStyle.INBOX,
                //     lines: ['First Message', 'Second Message', 'Third Message', 'Forth Message'],datetime
                //   },
                // style: {
                //     type: AndroidStyle.MESSAGING,
                //     person: {
                //         name: 'John Doe',
                //         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s',
                //     },
                //     messages: [
                //         {
                //             text: 'Hey, how are you?',
                //             timestamp: Date.now() - 480000, // 8 minutes ago
                //         },
                //         {
                //             text: 'Great thanks, food later?',
                //             timestamp: Date.now(), // Now
                //             person: {
                //                 name: 'Sarah Lane',
                //                 icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s',
                //             },
                //         },
                //     ],
                // }

                pressAction: {
                    id: 'snooze',
                },

                // actions: [
                //     {
                //         title: 'Reply',
                //         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s',
                //         pressAction: {
                //             id: 'reply',
                //         },
                //         input: {
                //             allowFreeFormInput: true, // true to reply
                //             choices: ['Yes', 'No', 'Maybe'],
                //             placeholder: 'Reply to Sarah...',
                //         },
                //     },
                // ],
            },
        });
    }


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Button title="Display Notification" onPress={() => onDisplayNotification()} />
                {/* <Button title="Cancel Notification" onPress={() =>  await notifee.cancelNotification(notificationId);} /> */}
            </View>

            <View style={styles.container2}>
                {/* Using Inlined date picker-------------------- */}
                <Text style={styles.text}>Set Date & Time</Text>
                <DatePicker style={{ alignItems: 'center' }} date={date} mode='date' onDateChange={setDate} />
                <Button title='Set Date & Time' />

                {/* Using default modal for date picker-------------------- */}
                <Text style={styles.text}>Set date & time</Text>
                <Button title="Date & Time" onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'center',
        // gap: 20
    },
    container1: {
        height: 50,
        // gap: 20
    },
    text: {
        fontSize: 25,
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
    container2: {
        marginTop: 50,
        alignItems: 'center',
        gap: 20,
    },
    btn: {
        width: 200,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 8,
    },
    btnText: {
        fontSize: 25,
        color: 'yellow',
        textAlign: 'center',
    },
});

export default LocalNotifi;