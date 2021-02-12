import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/navigation/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
