import * as React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
		backgroundColor: 'transparent',
	},
  overlay:{
    height: 200,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,.7)'
  }
})
