import { ImageBackground, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../styles/camera'
import { usePlantId, useAlert } from '../hooks'
import { ModalOverlay } from '../model/Overlay'

export default function CameraPreview({
  photo,
  setPreviewVisible,
  identifyImage,
  loading,
  visible,
  setVisible,
  data,
  setData,
  base64,
  loadingModel
}) {
  const { createAlert } = useAlert()
  const { uploadPhotos, loadingPlantId } = usePlantId()
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
        {loading  && <LoadingSpinner />}
        {visible &&
          <ModalOverlay 
            loading={loading} 
            base64={base64} 
            setPreview={setPreviewVisible} 
            setData={setData} 
            createAlert={createAlert} 
            visible={visible} 
            setVisible={setVisible} 
            data={data} 
            />}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => uploadPhotos(base64)}
        >
          <MaterialCommunityIcons
            name='information-variant'
            size={32}
            color='white'
          />
          <Text style={{ color: 'white' }}>Plant Info</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={identifyImage}>
          <MaterialCommunityIcons name='search-web' size={40} color='white' />
          <Text style={{ color: 'white' }}>Predict</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPreviewVisible(false)}>
          <MaterialCommunityIcons name='window-close' size={32} color='white' />
          <Text style={{ color: 'white' }}>Close</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}
