import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { styles } from '../styles/camera'
import { useAlert } from '../hooks/useAlert'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const ShutterButton = ({ takePicture, setType }) => {
	const { createAlert } = useAlert()
	return (
		<>
			<TouchableOpacity
				onPress={() => {
					setType(
						type === Camera.Constants.Type.back
							? Camera.Constants.Type.front
							: Camera.Constants.Type.back
					)
				}}
			>
				<MaterialCommunityIcons
					size={32}
					color='white'
					name='camera-party-mode'
				/>
			</TouchableOpacity>

			<TouchableOpacity
				// onPress={takePicture}
				onPress={() => createAlert('currently disabled')}
				style={styles.shutter}
			>
				<View style={styles.innerShutter}>
					<View style={styles.centerShutter}></View>
				</View>
			</TouchableOpacity>
		</>
	)
}
