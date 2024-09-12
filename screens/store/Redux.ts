import React from 'react';
import { View, Text, Button } from 'react-native';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    userData:[],
    email:"example@gmail.com",
    post:{
      url:"",
      title:"",
      data:"",
      likes:0
    }
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },

    updateUserData:((state, action) => {
      state.userData = action.payload
    }),

    updateEmail: ((state, action) => {
      state.email = action.payload
    }),
  }
})

export const { incremented, decremented,updateEmail } = counterSlice.actions

export const reducerTest = counterSlice.reducer

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))
