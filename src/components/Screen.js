import * as React from 'react'
import { View } from 'react-native'
import { styles } from '../styles/screen'

export const Screen = ({ children }) => {
	return <View style={styles.container}>{children}</View>
}
