import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const FlashButton = ({ flashMode, toggleFlash }) => {
	return (
		<TouchableOpacity
			onPress={toggleFlash}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: flashMode === 'off' ? '#000' : '#fff',
				borderRadius: 32,
				height: 32,
				width: 32,
			}}
		>
			<Text
				style={{
					fontSize: 32,
				}}
			>
				⚡️
			</Text>
		</TouchableOpacity>
	)
}
