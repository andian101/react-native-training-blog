import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn(),
  };
});
