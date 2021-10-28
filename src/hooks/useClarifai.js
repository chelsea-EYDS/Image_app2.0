import React, { useState } from 'react'
import { Alert } from 'react-native'
import axios from 'axios'
import {
	REACT_YOUR_MODEL_ID,
	REACT_YOUR_USER_ID,
	REACT_YOUR_APP_ID,
	REACT_YOUR_PERSONAL_TOKEN,
} from '@env'

//TODO *******WIP****
export const useApi = () => {
	const [result, setResult] = useState(null)

	const callApi = async (result) => {
		const data = {
			user_app_id: {
				user_id: `${REACT_YOUR_USER_ID}`,
				app_id: `${REACT_YOUR_APP_ID}`,
			},
			inputs: [
				{
					data: {
						image: {
							base64: result,
						},
					},
				},
			],
			model: {
				model_id: 'aaa03c23b3724a16a56b629203edc62c',
				// output_info: {
				// 	output_config: {
				// 		select_concepts: [{ name: 'train' }, { id: 'ai_6kTjGfF6' }],
				// 	},
				// },
			},
		}

		const raw = JSON.stringify(data)
		const requestOptions = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Key ${REACT_YOUR_PERSONAL_TOKEN}`,
			},
			body: raw,
		}

		await axios
			.post(
				`https://api.clarifai.com/v2/models/${REACT_YOUR_MODEL_ID}/outputs`,
				requestOptions
			)
			.then((result) => {
				console.log(result.outputs[0].data.concepts[0].name)
				setResult(result.outputs[0].data.concepts[0].name)
				Alert.alert(result.outputs[0].data.concepts[0].name)
			})
			.catch((error) => console.log('error', error))
	}

	return {
		callApi: (res) => callApi(res),
		result,
	}
}
