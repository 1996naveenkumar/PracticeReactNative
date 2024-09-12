import React from "react";
import { StyleSheet } from "react-native";

const stylesConstant = StyleSheet.create({

    navBlueBtn : {
        width: "100%",
        height: 50,
        backgroundColor: '#2f74fa',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    navBottomBlueBtn : {
        width: "90%",
        height: 50,
        backgroundColor: '#2f74fa',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
    },

    navBlueBtnTxt: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },

})

export default stylesConstant;