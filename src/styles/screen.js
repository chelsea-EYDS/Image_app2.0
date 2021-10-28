import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000c0',
		width: '100%',
		marginTop: Platform === 'web' ? 0 : 64,
		padding: 0,
	},
})
