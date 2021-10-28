import React, { useRef, useEffect, useState } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
import { REACT_APP_CLAR_API_KEY } from '@env'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { useAlert } from '.'
import clarifai from 'clarifai'


export const useCamera = () => {
	const [photo, setPhoto] = useState(null)

	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(null)

	const [cameraReady, setCameraReady] = useState(false)
	const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
	const [hasPermission, setHasPermission] = useState(null)
	const [previewVisible, setPreviewVisible] = useState(false)
	const [flashMode, setFlashMode] = useState('off')

  const {createAlert}=useAlert()

	const cameraRef = useRef()
  const api_key = REACT_APP_CLAR_API_KEY
  
  console.log(api_key)

	useEffect(() => {
		;(async () => {
			if (await Camera.isAvailableAsync()) {
				const types = await Camera.getAvailableCameraTypesAsync()
				setCameraType(
					Platform.OS === 'web'
						? Camera.Constants.Type.front
						: Camera.Constants.Type.back
				)
				if (Platform.OS === 'web') {
					setHasPermission(true)
				} else {
					const { status } = await Camera.getCameraPermissionsAsync(
						Permissions.CAMERA,
						Permissions.MEDIA_LIBRARY
					)
					setHasPermission(status === 'granted')
				}
			}
		})()
	}, [])

	const switchCamera = () => {
		setCameraType((prevCameraType) =>
			prevCameraType === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		)
	}

	const onCameraReady = () => {
		setCameraReady(true)
	}

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			base64: true,
		})

		if (!result.cancelled) {
			setPhoto(result)
			setPreviewVisible(true)
		}
	}

	const onSnap = async () => {
		if (cameraRef.current && cameraReady) {
			const options = { quality: 0.7, base64: true }
			const photo = await cameraRef.current.takePictureAsync(options)
			setPreviewVisible(true)
			setPhoto(photo)
		}
	}

	const toggleFlash = () => {
		if (flashMode === 'on') {
			setFlashMode('off')
		} else if (flashMode === 'off') {
			setFlashMode('on')
		} else {
			setFlashMode('auto')
		}
	}

	const identifyImage = async (photo) => {
		setLoading(true)
		const app = new clarifai.App({
			apiKey: api_key,
		})
    const base64 = photo.split(',')
    
		try {
			const response = await app.models.predict(clarifai.GENERAL_MODEL, {
				base64: base64[1]
			})

			createAlert(response.outputs[0].data.concepts[0].name)
			setLoading(false)
		} catch (err) {
			console.log(err)
			setLoading(false)
		}
	}

	return {
		toggleFlash,
		pickImage,

		hasPermission,

		setPreviewVisible,
		previewVisible,

		photo,
		identifyImage: (photo) => identifyImage(photo),

		flashMode,
		loading,
		response,

		onCameraReady,
		cameraRef,

		switchCamera,
		cameraReady,

		onSnap,
		cameraType,
	}
}
