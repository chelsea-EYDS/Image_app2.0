import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { styles } from '../styles'

export const Button = ({ onPress, text }) => {
	return (
		<TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}
const colors = {
	primary: 'teal',
	secondary: '#8DBFC3',
	text: '#000000',
}

// https://www.teahub.io/photos/full/267-2676680_cute-light-teal-backgrounds.jpg
