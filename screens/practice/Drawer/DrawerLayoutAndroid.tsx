import React, { useRef, useState } from 'react';
import {
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

const DrawerLayout = () => {
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');

    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <TouchableOpacity onPress={() => drawer.current?.closeDrawer()} style={styles.btn}>
                <Text style={styles.btnText}>Close drawer</Text>
            </TouchableOpacity>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>
            <Text style={[styles.paragraph,{borderColor: 'black', borderWidth: 2}]}>Random text</Text>

        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Swipe from the side or press button below to see it!
                </Text>
                <TouchableOpacity onPress={() => drawer.current?.openDrawer()} style={styles.btn}>
                    <Text style={styles.btnText}>Open Drawer</Text>
                </TouchableOpacity>

                <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>

                <TouchableOpacity onPress={() => changeDrawerPosition()} style={styles.btn}>
                    <Text style={styles.btnText}>Change Drawer Position</Text>
                </TouchableOpacity>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 12,
        marginTop: 10,
        width: 250,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
    },
    btn: {
        backgroundColor: '#e6004a',
        borderRadius: 5,
        padding: 10,
        height: 40,
        width: 250,
        marginBottom: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
    },
});

export default DrawerLayout;