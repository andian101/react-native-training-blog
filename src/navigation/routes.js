import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listing from '../screens/Listing';
import {screenTypes} from './constants';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{title: 'Articles'}}
        name={screenTypes.listing}
        component={Listing}
      />
    </AppStack.Navigator>
  );
};

export default Routes;
