import * as React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000c0',
		width: '100%',
		marginTop: 64,
		padding: 0,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-start',
		width: '100%',
		marginTop: 0,
		padding: 0,
	},
	text: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	textBox: {
		paddingTop: 64,
	},
	buttonStyles: {
		elevation: 8,
		backgroundColor: 'teal',
		borderRadius: 10,
		paddingVertical: 16,
		paddingHorizontal: 12,
	},
	buttonText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
})
