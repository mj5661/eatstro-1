import { useFonts } from 'expo-font';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
	const [loaded] = useFonts({
    DMSans: require('./src/assets/fonts/DMSans-Medium.ttf'),
    Abel: require('./src/assets/fonts/Abel-Pro.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (<Home />);
}

export default App;
