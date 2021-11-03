import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {  Welcome, CameraApp } from '../screens/index'
import { TabNav } from './TabNav'

const Stack = createNativeStackNavigator()

export const Routes = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Welcome' component={Welcome} />
      {/* <Stack.Screen name='Camera' component={CameraApp} /> */}
			<Stack.Screen name='TabNav' component={TabNav} />
		</Stack.Navigator>
	)
}
