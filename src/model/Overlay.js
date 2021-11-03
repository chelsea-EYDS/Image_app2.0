import React, { useState } from 'react';
import { Button, Overlay, Input } from 'react-native-elements';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { styles } from '../styles/loading'
import { useApi } from '../hooks'
import { LoadingSpinner } from '../components/LoadingSpinner'


export const ModalOverlay = ({ visible, setPreview, loading, previewVisible, setVisible, setData, data, base64, createAlert, ...props }) => {
  // const [visible, setVisible] = useState(false);
  console.log(data, "data")
  const toggleOverlay = async () => {
  await  setVisible(!visible);
  };

  const [buttonVisible, setButtonVisible] = useState(true)
  const [inputVisible, setInputVisible] = useState(false)
  const [text, setText] = useState(null)

  const { addConcept, loadingModel } = useApi()

  const close = async () => {
    setPreview(false)
    setVisible(false)
    setData(false)
  }

  const confirmImage = async () => {
    const { message } = await addConcept(data, base64)
    await createAlert(message, close)

  }
  const addImageData = async () => {
    const { message } = await addConcept(text.name, base64)
    console.log(message, 'add data message')
    await createAlert(message, close)
  }

  const modalAlert = async (type, message) => {
    setButtonVisible(false)
    console.log(type, message)
    if (type === 'confirm') {
      await addConcept(data, base64)
    } else {
      setInputVisible(true)
    }

  }

  return (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay} style={styles.overlay}>
      <View style={styles.horizontal}>
        <View
          style={{
            // backgroundColor: 'rgba(0,0,0,.5)',
            width: 300,
            height: 200,
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading || loadingModel && <LoadingSpinner />}

          <Text style={{ color: 'black', fontSize: 32, textAlign: 'center' }}>{data}</Text>
          {buttonVisible &&
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Button style={{ margin: 4 }} visible={buttonVisible} title="Confirm" onPress={confirmImage} />
              <Button title="Deny" style={{ margin: 4 }} visible={buttonVisible} onPress={() => modalAlert({ type: 'deny', message: 'Please Enter Image Tag Correction' })} />
            </View>
          }
          {inputVisible &&
            <>
              <Input
                name='imageCorrection'
                placeholder="Enter image tag"
                onChangeText={value => setText({ name: value })}
                {...props}
              />
              <Button title="submit" onPress={addImageData} />
            </>
          }
        </View>
      </View>
    </Overlay>

  );
};

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent:'space-evenly',
//     padding: 12
//   }
// })