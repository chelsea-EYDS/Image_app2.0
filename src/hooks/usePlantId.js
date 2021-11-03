import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import { Axios } from '../utils'
import {useAlert} from '.'

export const usePlantId = () => {
const {createAlert}=useAlert()
const [response, setResponse] =useState(null)
const [loadingPlantId, setLoading]=useState(false)
const navigation=useNavigation()

const uploadPhotos = async (data) => {
  setLoading(true)
    try {
      const response = await Axios.post('/api/plantId', {data})
      console.log(response.data)
        setResponse(response.data)
        navigation.navigate('Home', {params: response.data})        
        
    } catch (err) {
      console.log(err)
      createAlert('error')
    } finally {
      setLoading(false)
    }
}


  return {
    uploadPhotos,
    response,
    loadingPlantId
  }
}