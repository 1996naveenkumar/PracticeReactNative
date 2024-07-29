import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {decremented, incremented, updateEmail} from "../../store/Redux";
import { RootState } from '../../store/store';

const TestRedux = () => {

    const dispatch = useDispatch();

    const storeCounter = useSelector((state:RootState) => state.counterReucer.value)
    const storeEmail = useSelector((state:RootState) => state.counterReucer.email)

    const handleIncrease = () => {
        dispatch(incremented());
    }


    const handleDecrease = () => {
        dispatch(decremented());
    }

    const handleEmail = () => {
        dispatch(updateEmail("emailData@gmail.com"))
    }

    return (
        <>
            <View style={styles.container1}>
                <Text style={styles.title}>Redux data</Text>
                <TouchableOpacity onPress={() => { handleIncrease(); }} style={styles.btn} >
                    <Text style={{color: 'white', fontSize: 20}}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleDecrease() }} style={styles.btn} >
                    <Text style={{color: 'white', fontSize: 20}}>Decrement</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: 'black'}}>Updated counter is equal to {storeCounter}</Text>
                
                <TouchableOpacity onPress={() => { handleEmail() }} style={styles.btn} >
                    <Text style={{color: 'white', fontSize: 20}}>text</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, color: 'black'}}>Updated email is equal to {storeEmail}</Text>

            </View>
            
        </>
    );
};


const styles = StyleSheet.create({
    container1: {
        width: '100%',
        height: 500,
        marginTop: 100,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 50,
    },
    btn: {
        width: 120,
        height: 40,
        padding: 5,
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
        
    },

});

export default TestRedux; 