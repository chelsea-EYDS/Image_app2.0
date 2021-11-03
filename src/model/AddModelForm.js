import React, {useState} from 'react'
import { Input } from 'react-native-elements';
import {Button, StyleSheet, View } from 'react-native-paper';

export const AddModelForm = ({inputs, ...props}) => {
const [text, setText]=useState([])
console.log(text)
const onChange = (e) => {
setText(prevText => {
  return{
    ...prevText, [e.target.name]: e.target.value
  }
})
}
  return(
    <>

  
{inputs?.map(input=>   
  <>
<Input 
  name={input.name}
  placeholder={input.placeholder} 
  errorStyle={{ color: 'red' }}
  errorMessage={input.errorMessage}
  onChangeText={value => setText({[input.name]: value})}
  {...props}
  />
  <Button onPress={()=> input.onPress()} mode='contained'> Add </Button>
  </>
  )}
  </>
  )}



