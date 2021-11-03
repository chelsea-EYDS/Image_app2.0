import React, { useRef, useState, useEffect } from 'react'
import {FlatList, Text,   ScrollView, View, Image} from 'react-native'
import {Input, Button} from 'react-native-elements'
import {Title,  Headline, Paragraph} from 'react-native-paper'
import { Screen } from '../components'
import {useApi} from '../hooks'
import { LoadingSpinner } from '../components/LoadingSpinner'

export const InputsScreen = ({navigation, route}) => {
  const {loadingInputs, inputs, getInputs, trainModel}=useApi()


  useEffect(()=> {
  getInputs()
}, [])

return(
<Screen>
  {loadingInputs && <LoadingSpinner/>}
  <Button title="Train Model" onPress={trainModel}/>
  
  <FlatList
    data={inputs}
    renderItem ={({item}) => <Item item ={item}/>}
    keyExtractor={item => item.id}
  />
</Screen>

)}

const Item = ({item}) => {
  
  const key = item.id
  const [text, setText]=useState(null)
  const {loadingInputs, inputs, getInputs, deleteInput, addConceptsToInput}=useApi()
  const addConcept = async (id)=> {
  const res = await addConceptsToInput(id, text.concept)
  console.log(res)
  }

  return (
    <View>
      <Title>Image</Title>
      <Image source={{uri: item.data.image.url}} style={{width: 300, height: 300}} alt="input image"/>
      <Title>Concepts: </Title>
      {item?.data?.concepts?.map(item => 
        <View key={item.id}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      </View>
      )}
      <Title>Status: </Title>
      <Text>Status Code: {item.status.code}</Text>
      <Text>Status: {item.status.description}</Text>

<Input
name='concept'
onChangeText={(value) => setText({concept: value})}

/>

      <Button 
      style={{marginTop: 16, marginBottom: 24}}
      title="Add"
      onPress={()=> addConcept(item.id)}/>

    <Button 
      style={{marginTop: 16, marginBottom: 24}}
      title="Delete"
      onPress={()=> deleteInput(item.id)}/>


    </View>
    )    
}