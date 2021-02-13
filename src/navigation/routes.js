import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Listing from '../screens/Listing';
import Article from '../screens/Article';
import Login from '../screens/Login';
import {screenTypes} from './constants';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{headerShown: false}}
        name={screenTypes.login}
        component={Login}
      />
      <AppStack.Screen
        options={{title: 'Blog'}}
        name={screenTypes.listing}
        component={Listing}
      />
      <AppStack.Screen
        options={{title: 'Articles'}}
        name={screenTypes.article}
        component={Article}
      />
    </AppStack.Navigator>
  );
};

export default Routes;
