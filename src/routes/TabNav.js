
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { InputsScreen, CameraApp, HomeScreen, ModelScreen } from '../screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const TabNav = ({navigation}) => {
  const Tab = createMaterialBottomTabNavigator()
  return (

      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      barStyle = {{
        backgroundColor: 'teal'
        }}        
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel:'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
          
          }}/>
        <Tab.Screen name="Camera" component={CameraApp}  options={{
          tabBarLabel:'Camera',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={28} />
          ),
          }}/>
        <Tab.Screen name="Inputs" component={InputsScreen}  options={{
          tabBarLabel:'Inputs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" color={color} size={28} />
          )
          }}/>
      </Tab.Navigator>
 
  );
}