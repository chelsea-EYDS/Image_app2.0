import * as React from 'react'
 import { NavigationContainer } from '@react-navigation/native'
 import { Routes } from './src/routes/Navigation'
  import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper'

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

	return (
<PaperProvider  theme={theme}  >
     <NavigationContainer>
		 	<Routes />
		 </NavigationContainer>
     </PaperProvider>
		
	)
}
