import React, { useState } from 'react'
import { Platform, Alert } from 'react-native'

export const useAlert = () => {
  const createAlert = (message, close) => {
    console.log(message, close)
    return Platform.OS === 'web'
      ? alert(message)
      : Alert.alert(message, '', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: close },
      ])
  }
  return {
    createAlert,
  }
}
