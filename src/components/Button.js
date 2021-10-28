import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../styles/button'

export const Button = ({ onPress, text }) => {
	return (
		<TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

// https://www.teahub.io/photos/full/267-2676680_cute-light-teal-backgrounds.jpg
