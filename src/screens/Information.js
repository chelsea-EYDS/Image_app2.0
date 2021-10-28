import * as React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/information'
import { TitleText, Screen } from '../components'

export default function Information({ navigation }){
	return (
		<Screen>
			<View style={styles.container}>
				<TitleText text="To Do's:" />
				<Text style={{ color: 'white', textAlign: 'center' }}>
					- Add Information/Description here
				</Text>
				<Text style={{ color: 'white', textAlign: 'center' }}>
					- Custom Model Form to Train New Models
				</Text>
				<Text style={{ color: 'white', textAlign: 'center' }}>
					- Enable Feedback for current models in the alert dialog
				</Text>
				<Text style={{ color: 'white', textAlign: 'center' }}>
					- Add language translation
				</Text>
			</View>
		</Screen>
	)
}
