import React, { useState } from 'react'
import { Platform, View, StyleSheet, Button, Alert } from 'react-native'

export const useAlert = () => {
	const createAlert = (title) => {
		console.log(title, 'title')
		return Platform.OS === 'web'
			? alert(title)
			: Alert.alert(title, '', [
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
					{ text: 'OK', onPress: () => console.log('OK Pressed') },
			  ])
	}
	return {
		createAlert,
	}
}
