import React, { useState } from 'react'
import { Axios } from '../utils/api'


export const useApi = () => {
  const [loadingModel, setLoadingModel] = useState(false)
  const [inputs, setInputs] = useState(null)
  const [loading, setLoading] = useState(false)

  const deleteInput = async (inputId) => {

    return await Axios.delete(`/inputs/${inputId}`)

  }

  const getInputs = async () => {
    setLoading(true)
    try {
      const response = await Axios.get('/inputs')
      setInputs(response.data.inputs)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }


  const addConceptsToInput = async (id, data) => {
    setLoadingModel(true)
    try {
      const response = await Axios.patch('/inputs/' + id, { concept: data })
      if (response.data.status.description === "Ok") {
        return {
          message: 'Success! Your image data and concept input have been added to the custom_model'
        }
      } else {
        return {
          message: 'Error confirming your inputs'
        }
      }
    } catch (err) {
      console.log(err, "err")
      return { message: 'Error' }
    } finally {
      setLoadingModel(false)
    }
  }


  const addConcept = async (data, base64) => {
    setLoadingModel(true)
    try {
      const response = await Axios.post('/inputs', { base64: base64, concept: data })
      if (response.data.status.description === "Ok") {
        return {
          message: 'Success! Your image data and concept input have been added to the custom_model'
        }
      } else {
        return {
          message: 'Error confirming your inputs'
        }
      }
    } catch (err) {
      console.log(err, "err")
      return { message: 'Error' }
    } finally {
      setLoadingModel(false)
    }
  }

  const trainModel = async () => {
    try {
      const response = await Axios.post('/model/train')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    addConcept,
    getInputs,
    inputs,
    loadingInputs: loading,
    deleteInput,
    addConceptsToInput,
    trainModel,
    loadingModel
  }
}
