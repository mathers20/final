import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Login} from '../screens/Login';
import { Register } from '../screens/Register';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}