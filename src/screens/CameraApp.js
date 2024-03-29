import React from 'react'
import { Text, Platform, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useCamera } from '../hooks'
import CameraPreview from './CameraPreview'

export default function CameraApp({ navigation }) {
  const {
    toggleFlash,
    pickImage,
    previewVisible,
    setPreviewVisible,
    photo,
    flashMode,
    base64,
    identifyImage,
    loading,
    response,
    onCameraReady,
    cameraRef,
    cameraType,
    switchCamera,
    onSnap,
    apiPOST,
    setBase64,
    loadingModel,
    visible, 
    setVisible, 
    data, 
    setData
  } = useCamera()

  return (
    <View style={styles.container}>
      {previewVisible && photo ?
        <CameraPreview
          base64={base64}

          setBase64={setBase64}
          photo={photo}
          loading={loading}
          response={response}
          identifyImage={identifyImage}
          setPreviewVisible={setPreviewVisible}
          apiPOST={apiPOST}
          visible={visible}
          setVisible={setVisible}
          data={data}
          setData={setData}
          loadingModel={loadingModel}
        />
        :
        <Camera
          ref={cameraRef}
          onCameraReady={onCameraReady}
          type={cameraType}
          flashMode={Platform === 'web' ? null : flashMode}
          style={{ flex: 1, width: "100%" }}
        >
          <View
            style={{

              flex: 1,
              width: '100%',

              margin: 0,
              justifyContent: 'flex-end',
              backgroundColor: 'transparent',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                // position:'absolute',
                width: '100%',
                bottom: 0,
                margin: 0,
                padding: 20,
                justifyContent: 'space-evenly',
                backgroundColor: 'black',
              }}
            >
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

              <TouchableOpacity onPress={switchCamera}>
                <MaterialCommunityIcons
                  size={32}
                  color='white'
                  name='camera-party-mode'
                />
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={takePicture}
                onPress={onSnap}
                style={{
                  width: 40,
                  height: 40,
                  color: 'white',
                  backgroundColor: 'white',
                  borderRadius: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    width: 32,
                    height: 32,
                    color: 'black',
                    backgroundColor: 'black',
                    borderRadius: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      color: 'white',
                      backgroundColor: 'white',
                      borderRadius: 24,
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={pickImage}>
                <MaterialCommunityIcons
                  name='image-multiple'
                  size={32}
                  color='white'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                <MaterialCommunityIcons
                  name='window-close'
                  size={32}
                  color='white'
                />
              </TouchableOpacity>
            </View>
          </View>



        </Camera>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})