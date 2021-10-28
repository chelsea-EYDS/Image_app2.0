import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const IconButton = ({ onPress, color, size, name }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<MaterialCommunityIcons name={name} size={size} color={color} />
		</TouchableOpacity>
	)
}
