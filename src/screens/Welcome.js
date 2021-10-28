import React from 'react'
import { ImageBackground, View } from 'react-native'
import { TitleText, Button, Screen } from '../components'
import { styles } from '../styles/welcome'

const image = {
	uri: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
}

export default function Welcome({ navigation }){
	return (
		<Screen>
			<ImageBackground source={image} resizeMode='cover' style={styles.image}>
				<View style={styles.textBox}>
					<View>
						<TitleText text='Image' />
						<TitleText text='Recognition' />
						<TitleText text='With Clarifai' />
					</View>

					<Button
						onPress={() => navigation.navigate('Camera')}
						text='Go To Camera'
					/> 

				</View>
			</ImageBackground>
		</Screen>
	)
}
