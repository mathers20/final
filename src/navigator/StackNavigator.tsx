import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Login} from '../screens/Login';
import { Profile} from '../screens/Profile';
import { Detalle } from '../screens/Detalle';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}