import { ImageBackground, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../styles/camera'
import { useAlert } from '../hooks/useAlert'

export default function CameraPreview({
	photo,
	setPreviewVisible,
	identifyImage,
	loading,
	response,
}){
	const { createAlert } = useAlert()
	return (
		<ImageBackground
			source={{ uri: photo && photo.uri }}
			style={{
				flex: 1,
				width: '100%',
				height: '100%',
			}}
		>
			<View
				style={{
					backgroundColor: 'transparent',
					flex: 1,
					width: '100%',
					height: '100%',
				}}
			>
				{loading && <LoadingSpinner />}
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => createAlert('Sharing is not yet enabled')}
				>
					<MaterialCommunityIcons
						name='share-outline'
						size={32}
						color='white'
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={identifyImage}>
					<MaterialCommunityIcons name='search-web' size={40} color='white' />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => createAlert('Saving is not yet enabled')}
				>
					<MaterialCommunityIcons
						name='content-save-outline'
						size={32}
						color='white'
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPreviewVisible(false)}>
					<MaterialCommunityIcons name='window-close' size={32} color='white' />
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}
