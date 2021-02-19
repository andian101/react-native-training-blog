import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listing from '../screens/Listing';
import Article from '../screens/Article';
import {screenTypes} from './constants';

const sharedOptions = {
  headerTitleAlign: 'center',
};

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{title: 'Blog', ...sharedOptions}}
        name={screenTypes.listing}
        component={Listing}
      />
      <AppStack.Screen
        options={{title: 'Articles', ...sharedOptions}}
        name={screenTypes.article}
        component={Article}
      />
    </AppStack.Navigator>
  );
};

export default Routes;
