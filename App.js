import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/navigation/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainContextProvider from './src/context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </MainContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
