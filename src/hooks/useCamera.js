import React, { useRef, useEffect, useState } from 'react'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
import { useAlert } from '.'
import { Axios } from '../utils/api'

export const useCamera = () => {
  const [photo, setPhoto] = useState(null)
  const [base64, setBase64] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cameraReady, setCameraReady] = useState(false)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [flashMode, setFlashMode] = useState('off')

  const [data, setData] = useState('')
  const [visible, setVisible] = useState(false)
  const { createAlert } = useAlert()

  const cameraRef = useRef()

  const askCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync(
      Permissions.CAMERA,
      Permissions.MEDIA_LIBRARY
    )
    setCameraType(Camera.Constants.Type.back)
    setHasPermission(status === 'granted')
    setCameraReady(true)
  }
  useEffect(() => {
    askCameraPermission()
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
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: .1,
        base64: true,
      })
      if (!result.cancelled) {
        setPhoto(result)
        setPreviewVisible(true)
        setBase64(result.base64)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const onSnap = async () => {
    try {
      if (cameraRef.current) {
        const options = {

          allowsEditing: true,
          aspect: [4, 3],
          quality: .1,
          base64: true,
        }
        const result = await cameraRef.current.takePictureAsync(options)

        if (!result.cancelled) {
          setPhoto(result)
          setPreviewVisible(true)
          setBase64(result.base64)
        }
      }
    } catch (err) {
      console.log(err)
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

  const identifyImage = async () => {
    setLoading(true)
    try {
      const response = await Axios.post('/predict', {
        base64: base64
      })
      console.log(response)
      
      response.data && setData(response.data?.outputs[0].data.concepts[0].name)
      setVisible(true)

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const apiPOST = async () => {
    try {
      const res = await Axios.post('/api/concepts', base64)
      console.log(res, "res")
    } catch (err) {
      console.log(err)
    }
  }

  return {
    toggleFlash,
    pickImage,
    hasPermission,
    setPreviewVisible,
    previewVisible,
    photo,
    identifyImage,
    flashMode,
    loading,
    onCameraReady,
    cameraRef,
    switchCamera,
    cameraReady,
    base64,
    setBase64,
    onSnap,
    cameraType,
    visible, 
    setVisible, 
    data, 
    setData,
    apiPOST
  }
}
