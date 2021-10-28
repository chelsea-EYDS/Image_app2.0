# Image Recognition App

Image recognition App built with React Native, Expo and Clarifai API.

## Demo

Not all features are enabled on the simulator, so the best way to use the app is on a device. 

Install Expo Go and scan the QR code <a href='https://expo.io/@angelena/projects/image-app'>here</a> 

You can run the app and see/change code in the browser using a simulator:
 <a href='https://snack.expo.dev/@angelena/github.com-chelsea-angelena-freshworks-image_app2.0'>here</a>

(but you'll need to add your own API key from <a href='https://portal.clarifai.com/'>clarifai</a>...they're free, you just have to create an account :) )

Or there's a quick video demo of a simulator <a href = 'https://www.loom.com/share/3f5db285b2464a94a511d9d3ba9c111e?sharedAppSource=personal_library'>here</a>


## Installation

Grab an API key <a href='https://portal.clarifai.com/'>here</a> from clarifai.

See .env.example file for required env variables.

** note the versions of Expo used are important ... using SDK 42

Copy .env.example and provide the appropriate env vars 

Run: (from any dir) `yarn global add expo-cli`

Run: (from project dir) `yarn install` - must use yarn to work in the browser

Run one of:

- `expo start` (scan code to run on your device - Expo Go app must be installed)
- `expo start --web` (runs in browser)
- `expo start --ios` (simulator must be installed)
- `expo start --android`

## Contributing

Contributions Welcome :D

## License

[MIT](https://choosealicense.com/licenses/mit/)