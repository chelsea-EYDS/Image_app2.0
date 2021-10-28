import * as React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/text'

export const TitleText = ({ text }) => {
	return (
		<View style={styles.textView}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}
