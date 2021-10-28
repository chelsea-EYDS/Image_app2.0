import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { styles } from '../styles/loading'

export const LoadingSpinner = () => (
	<View style={[styles.container, styles.horizontal]}>
		<View
			style={{
				backgroundColor: 'rgba(0,0,0,.5)',
				width: 300,
				height: 200,
				display: 'flex',
				alignSelf: 'center',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ActivityIndicator size='large' color='#fff' />
			<Text style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
				Gathering Results...
			</Text>
		</View>
	</View>
)
