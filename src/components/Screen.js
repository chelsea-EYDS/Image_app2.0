import * as React from 'react'
import { View } from 'react-native'
import { styles } from '../styles'

export const Screen = ({ children }) => {
	return <View style={styles.container}>{children}</View>
}
